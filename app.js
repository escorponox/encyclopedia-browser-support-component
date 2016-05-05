$(document).ready(function() {
    $('.tb--open').find('.tb__content').css({ display: 'block'});
    $('.tb__header').on('click', function() {
        var content = $(this).next();
        var container = $(this).parent();
        if (container.hasClass('tb--open')) {
            container.removeClass('tb--open');
            content.velocity("slideUp", { duration: 400 });
        } else if (!container.hasClass('tb--open')) {
            container.addClass('tb--open');
            content.velocity("slideDown", { duration: 400 });
        }
    })
})
