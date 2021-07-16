const foodCall = () =>{
    $.ajax({
        url: "../data/food.json",
        type: "GET",
        contentType:"application/json",
        datatype: "json"
    }).done(res =>{
        let mainNode = $('#food-main');
        let mainText = $('#food-description');

        let photos = res.map(item => item.img)
        let text = res.map(item => item.description)

        createImage(mainNode, photos[0], 'id', 'food-img', 0)
        let mainImage = $('#food-img');
        $(mainText).text(text[0]);

        selectFoodImage(photos, text, mainImage, mainText)
    }).catch(err => console.log(err))
}

const selectFoodImage = (img, text, mainImg, mainText) =>{
    for(let i=0; i<4; i++){
        btn = $('.options-item');
        btn = btn[i];

        $(btn).click((e)=>{
            selectedBtn(e)
            modifyImage(mainImg, img[i])
            $(mainText).text(text[i])
        })
    }
}

const selectedBtn = ({target}) => {
    console.log(target)
    let btn = target;
    $('.food-options p').attr('class', 'options-item');
    $(btn).attr('class', 'options-item selected');
}


//--------------------------------------------//
//--------------------------------------------//

const testimonialCall = () =>{
    $.ajax({
        url: '../data/testimonials.json',
        type: 'GET',
        datatype: 'json'
    }).done(res =>{
        console.log(res)
        let testimonialMain = $('#gallery-main');
        let photos = res.map(item => item.img)
        let title = res.map(item => item.title)

        createImage(testimonialMain, photos[0], 'id', 'main-img', 0)
        createContent(testimonialMain, 'p', 'id', 'gallery-text', title[0], 0);
        testimonialsGallery(photos, title)
    }).catch(err => console.log(err))
}

const testimonialsGallery = (img, title) =>{
    let testimonialItem = $('.experience-gallery');
    img.forEach(photo => {
        createImage(testimonialItem, photo, 'class', 'gallery-item', 0);
    });
    selectImage (img, title);
}

const selectImage = ({length}, title) =>{
    for (let i=0; i<length;i++){
        let btn = $('.gallery-item');
        btn = btn[i]
        $(btn).click(()=>{
            $(btn).attr('alt', title[i])
            btnList(i);
        })
    }
}

function btnList(i){
    let photo = $('.gallery-item');
    chosenphoto = $(photo[i]);
    let node = $('#main-img')
    
    modifyImage(node, chosenphoto[0].src)
    $('#gallery-text').text(chosenphoto[0].alt)
}
