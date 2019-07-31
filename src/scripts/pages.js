$(function() {
    const sections = $('.section');
    const display = $('.maincontent');
    let inscroll = false;

    const paginationActive = paginationItemIndex => {
        $('.pagination__item')
            .eq(paginationItemIndex)
            .addClass('active')
            .siblings()
            .removeClass('active');
    };

    const performTransition = sectionEq => {
        if (inscroll) return;

        inscroll = true;
        const position = `${sectionEq * -100}%`;

        sections
            .eq(sectionEq)
            .addClass('section_active')
            .siblings()
            .removeClass('section_active');

        display.css({
            transform: `translateY(${position})`
        });

        paginationActive(sectionEq);

        setTimeout(() => {
            inscroll = false
        }, 1000 + 300);
    };

    const scrollToSection = direction => {
        const activeSection = sections.filter('.section_active');
        const nextSection = activeSection.next();
        const prevSection = activeSection.prev();

        if (direction === 'next' && nextSection.length) {
             performTransition(nextSection.index());
        }

        if (direction === 'prev' && prevSection.length) {
            performTransition(prevSection.index());
       }

    } 

    $('.wrapper').on('wheel', e => {
        const deltaY = e.originalEvent.deltaY;
        
        if (deltaY > 0) {
            scrollToSection('next');
        }

        if (deltaY < 0) {
            scrollToSection('prev');
        }
    });

    $(document).on('keydown', e => { 
        switch (e.keyCode) {
            case 40:
                scrollToSection('next');
                break;
            case 38:
                scrollToSection('prev');
                break;
        }
    });

    $('[data-scroll-to]').on('click', e => {
        e.preventDefault();

        const target = $(e.currentTarget).attr('data-scroll-to');

        performTransition(target);
        $('.nav').removeClass('nav_active');
    });

    $(window).swipe ({

        swipe:function(event, direction, distance, duration, fingerCount, fingerData, allowPageScroll) {
            const nextOrPrev = direction === "up" ? 'next' : 'prev';
            scrollToSection(nextOrPrev);
          }
    });

});