/**
 * 
 */

 $(window).on('load', function() {
	var welObj = $('.welcome');
	
	//.welcome内要素の分割
	welObj.each(function(){
		var welcome = $(this).html();
		var welBlock ="";
		
		welcome.split('').forEach(function(spell){	
			welBlock += '<span>' + spell + '</span>'
		});
		
		$(this).html(welBlock);
	});
	
	//.welcomeのfadeIn, fadeOut
	var time = 100;
	var next = 0;
	
	$(welObj).each(function(){
		var welSpan = $(this).children();
		
		welSpan.each(function(i){
			$(this).delay(i * time).fadeIn(100);
			next = time * i;
		});
		$(this).delay(next).fadeOut(1000);
		next += 1000;
	});
	
	
	//.centerのfadeIn
	$('.center').delay(next).fadeIn(1000);
	next += 1000;
	
	
	//Fade1内要素分割
	var F1Obj = $('.Fade1');
	
	F1Obj.each(function(){
		var F1 = $(this).html();
		var F1Block ="";
		
		F1.split('').forEach(function(spell){
			F1Block += '<span>' + spell + '</span>';
		})
		$(this).html(F1Block);
	});
	
	//.Fade1, .Fade2のfadeIn
	var last = 0;
	$(F1Obj).each(function(){
		var F1Span = $(this).children();
		
		F1Span.each(function(i){
			$(this).delay(time * i + next).fadeIn(100);
		});
		if(last < F1Span.length){
			last = F1Span.length;
		};
	});
	$('.Fade2').delay(last * 100 + next).fadeIn(1000);
 });