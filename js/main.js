$(document).ready(function(){

	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		position: 1
	}

	var info = {
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		position: 1
	}

	banner.padre.children('.slide').first().css({
		'left':'0'
	});
	info.padre.children('.slide').first().css({
		'left':'0'
	});

	var altoBanner = function(){
		/* Calculamos el alto de cada slide */
		var alto = banner.padre.children('.slide').outerHeight();

		banner.padre.css({
			'height': alto+'px',
		});

		console.log(alto);
	}
	var altoInfo = function(){
		/* Calculamos el alto de cada slide */
		var alto = info.padre.children('.active').outerHeight();

		info.padre.animate({
			'height': alto+'px',
		});

		//console.log(alto);
	}
	var altoContenedor = function(){
		var altoVentana = $(window).height();
		if(altoVentana <= $('.contenedor').outerHeight() + 200){
			$('.contenedor').css({
				'height':''
			})
		}else{
			$('.contenedor').css({
				'height':altoVentana+'px'
			})
			$('.fondo').css({
				'height':altoVentana+'px'
			})
		}
	}
	altoBanner();
	altoInfo();
	altoContenedor();

	$(window).resize(function(){  // Cada vez que se ajuste el tamaño de la ventana
		altoBanner();
		altoInfo();
		altoContenedor();
	});

	$('#info').children('.slide').each(function(){
		$('#botones').append('<span>');
	});

	$('#botones').children('span').first().addClass('active');

	/*-------------------------------------------------*/
	/*-------------SLIDER BANNER-----------------------*/
	/*-------------------------------------------------*/
	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if(banner.position < banner.numeroSlides){ // Condicional para hacer el loop de las imgs

			//Nos aseguramos que los edmoas slides empiecen desde la derecha
			banner.padre.children().not('.active').css({
				'left': '100%'
			})

			/* Remueve la clase del actual "active", va al siguiente elemento,  se lo agrega y lo anima */
			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left':'0'
			});

			/*Animamos el slide anterior para que se deslice hacia la derecha*/
			$('#banner .active').prev().animate({
				'left':'-100%'
			});

			banner.position = banner.position + 1;
		} else {
			$('#banner .active').animate({
				'left':'-100%'
			})

			banner.padre.children().not('.active').css({
				'left': '100%'
			})

			$('#banner .active').removeClass('active');
			banner.padre.children('.slide').first().addClass('active').animate({
				'left': 0
			})
			banner.position = 1;
		}
	})

	$('#banner-prev').on('click', function(e){
		e.preventDefault();

		if(banner.position > 1){
			banner.padre.children().not('.active').css({
			'left': '-100%'
			})

			$('#banner .active').animate({
				'left': '-100%'
			})

			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': '0'
			})

			banner.position = banner.position - 1;
		} else {
			banner.padre.children().not('.active').css({
				'left': '-100%'
			})

			$('#banner .active').animate({
				'left': '100%'
			})

			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': '0'
			});

			banner.position = banner.numeroSlides;
		}
	})

	var cont = 1;

	$('#info-next').on('click', function(e){
		e.preventDefault();

		if(info.position < info.numeroSlides){ // Condicional para hacer el loop de las imgs

			//Nos aseguramos que los demas slides empiecen desde la derecha
			info.padre.children().not('.active').css({
				'left': '100%'
			});

			/* Remueve la clase del actual "active", va al siguiente elemento,  se lo agrega y lo anima */
			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left':'0'
			});

			/*Animamos el slide anterior para que se deslice hacia la derecha*/
			$('#info .active').prev().animate({
				'left':'-100%'
			});

			$('#botones').children('.active').removeClass('active').next().addClass('active');

			cont = cont + 1;
			$('.fondo').css({
				'background-image':'url("../img/fondo'+cont+'.png")'
			});
			info.position = info.position + 1;
			
		} else {
			$('#info .active').animate({
				'left':'-100%'
			});

			info.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#info .active').removeClass('active');
			info.padre.children('.slide').first().addClass('active').animate({
				'left': '0'
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').first().addClass('active');

			cont = 1;
			$('.fondo').css({
				'background-image':'url("../img/fondo'+cont+'.png")'
			});
			info.position = 1;

		}
		altoInfo();
	})

	$('#info-prev').on('click', function(e){
		e.preventDefault();

		if(info.position > 1){
			info.padre.children().not('.active').css({
			'left': '-100%'
			});

			$('#info .active').animate({
				'left': '-100%'
			});

			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left': '0'
			});

			$('#botones').children('.active').removeClass('active').prev().addClass('active');

			$('#fondo').css({
				'background-image':'url("../img/fondo2.png")'
			});

			cont = cont - 1;
			$('.fondo').css({
				'background-image':'url("../img/fondo'+cont+'.png")'
			});
			info.position = info.position - 1;
		} else {
			info.padre.children().not('.active').css({
				'left': '-100%'
			})

			$('#info .active').animate({
				'left': '100%'
			})

			$('#info .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				'left': '0'
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');

			cont = info.numeroSlides;
			$('.fondo').css({
				'background-image':'url("../img/fondo'+cont+'.png")'
			});
			info.position = info.numeroSlides;
		}
		altoInfo();
	})
});