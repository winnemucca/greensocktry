$(document).on('ready', function() {
  


// TweenLite.to(elem, 1, {vars});

// TweenLite.from('h1', 0.5, {left:100, autoAlpa:0});

// the first parameter we feed the tween is the target(the object whose properties you want to tween), #2 is the duration, and the last is an object with one or more properties that should be tweened to the provided end values.


// var obj = document.getElementById('para1');
// TweenLite.to(obj, 3, {backgroundColor: '#ff0000', width:'50%'});


// var photo = document.getElementById('photo');
// // var photo = ('photo');
// TweenLite.to(photo, 4.5, {width:200, height: 400});


// //with jquery all that i need to do is reference my class. or id# with a string
// TweenLite.to(".para2", 4, {boxShadow: "0px 0px 20px red", color: "#FC0"});

//when I set to 0 the photo starts at 0 and fills to full size.  When I set the y I take the entire screen then squeez to original size larger y takes longer. x stretches up and down then to original size

// TweenLite.from('#photo2',  4, {scaleX:100, scaleY:0});



// TweenLite.fromTo('#photo2' , 1.5, {width:0, height: 0}, {width:200, height:400, delay:1});



// function did not work when i tried fromTo
// TweenLite.to('photo2', 1, {	width: 100, height: 200, delay: 0.5, onComplete:myFunction});
// function myFunction() {
// 	console.log('tween finished');
// }



// TweenLite.to('photo2', 1, {width: 100, delay: 0.5})



// cannot get to work
// var myTween = TweenLite.to('#photo2', 3, {width: 1000, paused: true});


// 	$('.start').on('click', function()  {
// 	myTween.restart();
// 	console.log('clicked');

	// TweenLite.to('#para1', 1, {width: 100, ease:'Elastic.easeOut'});
	// TweenLite.to('#para1' , 1, {height: 200, ease: 'easeOutElastic'});

	var myTween = TweenLite.to('#photo2', 10, {css: {scaleZ:0.5, rotation:-720}, ease:Bounce.easeOut, paused: true});

	$('.start').on('click', function () {
		myTween.resume();

	})

	// TweenLite.to('#photo', 5, {scrollTo:{y:300}, ease: Bounce.easeOut});

	// var tweener =TweenLite.to('#photo', 3, {width: '90%', onComplete: myFunction});

	$('.grow').on('click', function () {
		var tweener =TweenLite.to('#photo', 3, {width: '90%', onComplete: myFunction});
		function myFunction(){

		tweener.restart();


	}
	})

	// made an item disapear
	// TweenLite.to('#beer', 2, {autoAlpha:0});

	var tl = new TimelineLite();

		tl.from('h2',  1.5, {left: 100, autoAlpha: 0})
		.from('h3',  3.5, {left: 100, autoAlpha: 0},'h3')
		.from('#beer',  0.5, {left: 100, autoAlpha: 0},'h3+=0.25')
		.staggerFrom('#beerList', 0.1, {scale: 10, autoAlpha:0},'h3');




		// TweenLite.from('h2',  1, {left: 100, autoAlpha: 0});
		// TweenLite.from('h3',  1, {left: 100, autoAlpha: 0, delay: 1});
		// TweenLite.from('#beer',  1, {left: 100, autoAlpha: 0, delay: 1.5});
		// TweenMax.staggerFrom('#beerList', 1, {scale: 10, autoAlpha:0, delay: 2.0});




});











