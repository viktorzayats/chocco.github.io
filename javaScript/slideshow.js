$(function () {

    var borderItem = function(index) {
        $('.reviews__list')
            .find('.reviews__item')
            .eq(index)
            .addClass('reviews__item_active')
            .siblings()
            .removeClass('reviews__item_active');
    };

    var moveSlide = function (container, slideNum) {
        var 
            items = container.find('.slideshow__item'),
            activeSlide = items.filter('.slideshow__item_active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            duration = 500;
            
            items.animate({
                'left' : -reqIndex * 100 + '%'
            }, duration, function() {
                activeSlide.removeClass('slideshow__item_active');
                reqItem.addClass('slideshow__item_active');
            });
    }

    $('.reviews__item').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            container = $('.slideshow'),
            index = $this.index();
            

            moveSlide(container, index);
            borderItem(index);
    });
});