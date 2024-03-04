/**
 * 
 */

 $(window).on('load', function() {
	var welObj = $('.welcome');
	var time = 100;
	var next = 0;
	
	//.welcome内要素の分割
	welObj.each(function(){
		var welcome = $(this).html();
		var welBlock ="";
		
		welcome.split('').forEach(function(spell){
			welBlock += '<span>' + spell + '</span>';
		});
		
		$(this).html(welBlock);
		
		//.welcomeのfadeIn, fadeOut
		var welSpan = $(this).children();
		
		welSpan.each(function(i){
			$(this).delay(i * time).fadeIn(time);
			next = time * i;
		});
		$(this).delay(next).fadeOut(time * 10);
		next += time * 10;
	});


	//.centerのfadeIn
	$('.center').delay(next).fadeIn(time * 5);
	next += time * 5;
	
	
	//Fade1内要素分割
	var F1Obj = $('.Fade1');
	var finish = 0;
	
	F1Obj.each(function(){
		var F1 = $(this).html();
		var F1Block ="";
		
		F1.split('').forEach(function(spell){
			F1Block += '<span>' + spell + '</span>';
		})
		$(this).html(F1Block);
		
		//.Fade1のfadeIn
		var F1Span = $(this).children();
		
		F1Span.each(function(i){
			$(this).delay(time * i + next).fadeIn(time);
		});
		finish = F1Span.length * time;
	});
	next += finish + time * 5;
	
	
	//.Fade2のfadeIn
	$('.Fade2').delay(next).fadeIn(time * 5);
	
	
	//.Fade3内要素分割
	var F3Obj = $('.Fade3');
	
	F3Obj.each(function(){
		var F3 = $(this).html();
		var F3Block ="";
		
		F3.split('').forEach(function(spell){
			F3Block += '<span>' + spell + '</span>';
		})
		$(this).html(F3Block);
		
		//.Fade3のfadeIn
		var F3Span = $(this).children();
		
		F3Span.each(function(i){
			$(this).delay(time * i + next).fadeIn(time);
		});
		finish = F3Span.length * time;
	});
	next += finish + time * 5;
	
	
	//.F4のfadeIn
	$('.Fade4').delay(next).fadeIn(time * 5);
 });