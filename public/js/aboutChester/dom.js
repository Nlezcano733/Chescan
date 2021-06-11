const choiceOption = (info) =>{
    let descClassic = $('#clasicoDesc');
    let ingClassic = $('#clasicoIngred');
    let descPavo = $('#pavoDesc');
    let ingPavo = $('#pavoIngred');

    $(descClassic).click(()=>selectText(descClassic, ingClassic,'#classicText', info[0].description));
    $(ingClassic).click(()=>selectText(ingClassic, descClassic,'#classicText', info[0].ingredients));

    $(descPavo).click(()=>selectText(descPavo, ingPavo,'#pavoText', info[1].description));
    $(ingPavo).click(()=>selectText(ingPavo, descPavo,'#pavoText', info[1].ingredients));
}

const selectText = (node, another, nodeText, text) =>{
    $(another).attr('class', 'option')
    $(node).attr('class', 'option option-selected');
    $(nodeText).text(text)
}