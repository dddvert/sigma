document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.btn-minus');
    const plusButtons = document.querySelectorAll('.btn-plus');
    const removeButtons = document.querySelectorAll('.btn-remove');
    const quantityInputs = document.querySelectorAll('.quantity input');

    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
                updateCart();
            }
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateCart();
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.cart-item').remove();
            updateCart();
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 1) this.value = 1;
            updateCart();
        });
    });

    function updateCart() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;
        let count = 0;

        items.forEach(item => {
            const price = parseInt(item.querySelector('.item-details p').textContent);
            const quantity = parseInt(item.querySelector('.quantity input').value);
            total += price * quantity;
            count += quantity;
        });

        const delivery = total > 0 ? 3000 : 0;
        const finalTotal = total + delivery;

        
    }

    document.querySelector('.summary-item span:nth-child(2)').textContent = `${total} тг`;
    document.querySelector('.summary-total span:nth-child(2)').textContent = `${finalTotal} тг`;


    const checkoutButton = document.querySelector('.btn-checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
        });
    }

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Мы ответим вам в ближайшее время.');
            this.reset();
        });
    }
}); 