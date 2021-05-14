const sidebarOpen = () =>{
    let sidebar = $('.sidebar');
    sidebar.fadeIn();
    $('footer').fadeOut();
    $('#main').fadeOut();

    $('#sidebar__close').click(sidebarClose);
}

const sidebarClose = () =>{
    let sidebar = $('.sidebar');
    sidebar.fadeOut();
    $('footer').fadeIn();
    $('#main').fadeIn();
}

// --------------------------------------//

const slider = () =>{
    $('.dogs-gallery').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
}