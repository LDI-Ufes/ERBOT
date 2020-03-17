//
// Menu acessível via teclado
//

$(document).ready(function () {

  $.fn.accessibleDropDown = function () {
    var el = $(this);

    $('a', el).focus(function () {
      $(this).parents('li').addClass('menu-ativo');
      $(this).parents('.menu-lista').addClass('menu-aberto');
    }).blur(function () {
      $(this).parents('li').removeClass('menu-ativo');
      $(this).parents('.menu-lista').removeClass('menu-aberto');
    });
  }

  $('.nav-menu').accessibleDropDown();

});


//
// Menu móvel
//

$('.btn-menu').click(function() {
  $(this).siblings('.nav-menu').children('.menu-lista').toggleClass('menu-aberto')
})

const btnSubmenu = document.querySelectorAll('.tem-submenu span');
const temSubmenu = document.querySelectorAll('.tem-submenu');

btnSubmenu.forEach( (botao, index) =>{

    botao.addEventListener('click', function(){

      temSubmenu[index].classList.toggle('submenu-ativo');

    });

});