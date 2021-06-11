const infoProduct = [
    {
        description:    `Esta parte de la descripcion sera una prueba en español mas que nada para
                        diferenciarnos de los ingredientes y notar una diferencia a la hora de cambiar`,
        ingredients:    `Nunc non magna non purus convallis hendrerit. Vivamus in libero non 
                        risus venenatis porta. Etiam vel fermentum sem. Donec mattis, nulla ac dapibus suscipit`
    },
    {
        description:    `Prueba de descripcion que debera ser en españo para diferenciarse un  poco
                        de los ingredientes que son en ingles para notar una diferencia en el cambio`,
        ingredients:    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc sollicitudin elit felis, ut maximus dolor pretium at. 
                        In quis porta mauris. Donec ornare vehicula turpis vel sollicitudin.`
    }
]
$(()=>{
    $('#navbar__menu').click(sidebarOpen);
    choiceOption(infoProduct);
})
