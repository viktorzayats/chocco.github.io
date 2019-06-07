$(function() {

    var pagination = function(index) {
        $('.pagination__list')
            .find('.pagination__item')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')
    };

    var scroll = function (container, pageNum) {
        var pages = container.find('.section'),
            activePage = pages.filter('.section_active'),
            reqPage = pages.eq(pageNum),
            pageIndex = reqPage.index(),
            durations = 600;
            

            pages.animate({
                'top' : -pageIndex * 100 + 'vh'
            },durations, function() {
                activePage.removeClass('section_active');
                reqPage.addClass('section_active');
            });
    }

    $('.section').on('wheel', function(e) {
        e.preventDefault();
        var $this = $(this),
            container = $('.wrapper'),
            index = $this.index();

            scroll(container, index);

            console.log(index);
            
    });

    $('.pagination__item').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            container = $('.wrapper'),
            index = $this.index();

            scroll(container, index);
            pagination(index);
    });
        
});