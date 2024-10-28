$(document).ready(function(){
    console.log(document.querySelector('header btton'))
    console.log($('#botao-cancelar'))


    $('header button').click(function() {
        alert('Expandir formulário')
    }) 

    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
    })

})