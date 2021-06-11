const sidebarOpen = () =>{
    let sidebar = $('.sidebar');
    sidebar.fadeIn();

    $('#sidebar__close').click(sidebarClose);
    if(outerWidth >= 900){
        setTimeout(()=>{
            $('#sidebar__close').css('left', '10%');
        }, 500);
    }
}

const sidebarClose = () =>{
    let sidebar = $('.sidebar');
    sidebar.fadeOut();
    if(outerWidth >= 900){
        setTimeout(()=> {$('#sidebar__close').css('left', '45%');}, 500);
    }
}

// --------------------------------------//

const slider = (node) =>{
    $(node).slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 740,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 500,
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

const sliderComplete = (node) =>{
    $(node).slick();
}

// --------------------------------------//
const createNode = (father, tag, attr, attrName, content, i) =>{
    let newNode, nodeFather;
    nodeFather = $(father);
    newNode = document.createElement(tag);
    textContent = document.createTextNode(content);

    $(newNode).append(textContent);
    $(newNode).attr(attr, attrName);
    $(nodeFather[i]).append(newNode);
}

const createContent = (father, tag, attr, attrName, content, i) =>{
    let newNode, nodeFather;
    nodeFather = $(father);
    newNode = document.createElement(tag);
    textContent = document.createTextNode(content);

    $(newNode).append(textContent);
    $(newNode).attr(attr, attrName);
    $(nodeFather[i]).append(newNode);
}

const createImage = (father, direction, attr, attrName, i) => {
    let newNode, nodeFather;
    nodeFather = $(father);
    newNode = document.createElement('img');

    $(newNode).attr('src', direction);
    $(newNode).attr(attr, attrName);

    $(nodeFather[i]).append(newNode)
}

const modifyImage = (node, direction) => node = $(node).attr('src', direction)