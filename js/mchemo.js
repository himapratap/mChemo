// Toggle right arrows and down arrows
$('.side-nav li a').click(function() {
    console.log('mainLevel');
    $('.side-nav li.open').addClass('active');

    $(this).find('.mainLevel').toggleClass('fa-caret-down fa-caret-right');
});

$('.side-nav li ul li a').click(function() {
    console.log('secondLevel');
    $('.side-nav li ul li').addClass('active');

    $(this).find('.secondLevel').toggleClass('fa-plus-square fa-minus-square');
 });


$('.side-nav li ul li ul li a').click(function() {
    console.log('thirdLevel');
    $(this).find('.thirdLevel').toggleClass('fa-plus-square fa-minus-square');
$('.side-nav li ul li ul li').addClass('active');
});
