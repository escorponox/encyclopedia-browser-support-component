document.addEventListener('DOMContentLoaded', function cb() {
    [].forEach.call(document.querySelectorAll('.tb--open'), function (el) {
        el.querySelector('.tb__content').style.display = 'block';
    });

    [].forEach.call(document.querySelectorAll('.tb__header'), function (el) {
        el.addEventListener('click', function (e) {
            var content = el.nextElementSibling;
            var container = el.parentNode;
            animate(content, container);
        }, false);
    });

    function animate(content, container) {
        if (container.classList.contains('tb--open')) {
            container.classList.remove('tb--open');
            Velocity(content, "slideUp", {
                duration: 400,
            });
        } else {
            container.classList.add('tb--open');
            Velocity(content, "slideDown", {
                duration: 400,
            });
        }
    }
});
