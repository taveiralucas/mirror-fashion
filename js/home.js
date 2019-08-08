$('.novidades button, .mais-vendidos button').click(function(event) {
    $(event.target).parent().toggleClass('painel-aberto');
})
/*
$('.mais-vendidos button').click(function() {
    $('.mais-vendidos').addClass('painel-aberto');
})*/