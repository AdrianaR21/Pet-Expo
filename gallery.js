let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';

        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => { // added the class selector '.fa-times'
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

document.getElementById('search').addEventListener('click', function() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var cards = document.querySelectorAll('.product');

    cards.forEach(function(card) {
        var title = card.querySelector('h1').textContent.toLowerCase();
        var subtitle = card.querySelector('h2').textContent.toLowerCase();
        var origin = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(input) || subtitle.includes(input) || origin.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
