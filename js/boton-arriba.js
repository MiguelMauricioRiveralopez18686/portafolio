// Codigo que hace que el boton con la clase .ir-arriba haga su funcion, que cuando se haga srcoll al contenido de la pagina y se vaya al final de la misma, se de click en este y podamos volver a subir a la parte de arriba.

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300 );
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		};
	});
	
});