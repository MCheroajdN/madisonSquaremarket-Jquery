$(document).ready(() => {
 $('#cart').on('click', () => {
  $('#cartMenu').show()
});

$('#account').on('click', () => {
  $('#accountMenu').show()
});

$('#help').on('click', () => {
  $('#helpMenu').show()
});

// on mouse leave targeted by class
$('.dropdown-menu').on('mouseleave', () => {
  $('.dropdown-menu').hide();
});

})

/* using their individual id's as below will increase amount of code written, but if we target the class as the menus all share the same class name, we only have few line of codes as above.
$('#cartMenu').on('mouseleave', () => {
  $('#cartMenu').hide();
});

$('#accountMenu').on('mouseleave', () => {
  $('#accountMenu').hide();
});

$('#helpMenu').on('mouseleave', () => {
  $('#helpMenu').hide();
});

})*/


/* 
if the html elements are chained at once as in line 22, when you click on one of them on the website, all of them will open at the same time, which is not what we want
$(document).ready(() => {
  $('#cart, #account, #help').on('click', () => {
    $('.dropdown-menu').show();
  })
})*/