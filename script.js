/* $(document).ready(function(){
    console.log(document.querySelector('header btton'))
    console.log($('#botao-cancelar')) Teste para ver se o JQuery foi aplicado corretamente
})
    */

    $('header button').click(function() {
        $('form').slideDown()
    }) 

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
    })
