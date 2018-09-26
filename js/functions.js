// var elem = document.querySelector('.dropdown-trigger');
// var instance = M.Dropdown.init(elem, options);

// Or with jQuery

$('.dropdown-trigger').dropdown();

var $r = $(window);

$r.on("scroll", function(){
if($r.scrollTop() < 0){
$('html').style.webkitScrollBar.display = inline;
}else{
$('html').style.webkitScrollBar.display = hidden;
}
});

var $el = $("#footer-modal");

$el.on("mouseover", function(){
$(el).addClass('effect3');
});

$(document).ready(function(){
$('.button-collapse').sideNav({
menuWidth: 150, // Default is 300
edge: 'left', // Choose the horizontal origin
closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	draggable: true, // Choose whether you can drag to open on touch screens,
});
$('.carousel.carousel-slider').carousel({fullWidth: true});
});

$(document).ready(function(){
$('.cadastro').sideNav({
menuWidth: 200, // Default is 300
edge: 'right', // Choose the horizontal origin
closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	draggable: true, // Choose whether you can drag to open on touch screens,
});
$('.carousel.carousel-slider').carousel({fullWidth: true});
});

function scrollSuave($objeto){
var target_offset = $($objeto).offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 1000);
}

$(document).ready(function(){
$('.parallax').parallax();
});

/*$(document).ready(function(){

var options = [
{selector: '#contato', offset: 400, callback: 'globalFunction()' }];

Materialize.scrollFire(options);
});*/

$(document).ready(function() {
var options = [{
selector: '#contato',
offset: 400,
callback: function(el){
Materialize.showStaggeredList($(el));
}
}];
Materialize.scrollFire(options);
});

$(document).ready(function(){
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
});

$('.modal').modal({
dismissible: true, // Modal can be dismissed by clicking outside of the modal
opacity: .5, // Opacity of modal background
inDuration: 300, // Transition in duration
outDuration: 200, // Transition out duration
startingTop: '4%', // Starting top style attribute
endingTop: '10%', // Ending top style attribute
ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
alert("Ready");
console.log(modal, trigger);
},
complete: function() { alert('Closed'); } // Callback for Modal close
}
);

$(document).ready(function() {
$('select').material_select();
});