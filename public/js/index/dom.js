const openModal = (modal) =>{
    $(`.${modal}_detail`).fadeIn();
    $(`.${modal}_detail`).css('display', 'grid');
}

const closeModal = (modal) =>{
    modal === 'plan'
        ? $('.plan_detail').fadeOut()
        : $('.zone_detail').fadeOut()
}

const modifyProductCards = () =>{
    window.outerWidth > 600 && $('.introProd-title br').remove()
    window.outerWidth > 960 &&createNode('.introProd', 'div', 'class', 'introProd-img pollo', '', 0);
    window.outerWidth > 960 &&createNode('.introProd', 'div', 'class', 'introProd-img pavo', '', 1);
}