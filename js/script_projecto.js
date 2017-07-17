  /* 
  
  <!-- =========================
     JQUERY
     Website Provedor de Multimédia
     Realizado por André Fernandes Nº 10059
     Licenciatura do 3ºAno de Multimédia
     Unidade Curricular: Programação 1
     Docente: Frederico Fonseca
============================== -->

    */


/* JQUERY - JANELA ENTREVISTA 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */


$('#entrevista_text').click(function() {
    //----- PARA ABRIR A JANELA
    $('[data-popup_entrevista-open]').on('click', function(e)  {
        var targeted_popup_entrevista_class = jQuery(this).attr('data-popup_entrevista-open');
        $('[data-popup_entrevista="' + targeted_popup_entrevista_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- PARA FECHAR A JANELA
    $('[data-popup_entrevista-close]').on('click', function(e)  {
        var targeted_popup_entrevista_class = jQuery(this).attr('data-popup_entrevista-close');
        $('[data-popup_entrevista="' + targeted_popup_entrevista_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/* JQUERY - JANELA BIOGRAFIA 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */

$('#biografia_text').click(function() {
    //----- PARA ABRIR A JANELA
    $('[data-popup_biografia-open]').on('click', function(e)  {
        var targeted_popup_biografia_class = jQuery(this).attr('data-popup_biografia-open');
        $('[data-popup_biografia="' + targeted_popup_biografia_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- PARA FECHAR A JANELA
    $('[data-popup_biografia-close]').on('click', function(e)  {
        var targeted_popup_biografia_class = jQuery(this).attr('data-popup_biografia-close');
        $('[data-popup_biografia="' + targeted_popup_biografia_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/* JQUERY - JANELA MISSÃO 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */

$('#missao_text').click(function() {
    //----- PARA ABRIR A JANELA
    $('[data-popup_missao-open]').on('click', function(e)  {
        var targeted_popup_missao_class = jQuery(this).attr('data-popup_missao-open');
        $('[data-popup_missao="' + targeted_popup_missao_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- PARA FECHAR A JANELA
    $('[data-popup_missao-close]').on('click', function(e)  {
        var targeted_popup_missao_class = jQuery(this).attr('data-popup_missao-close');
        $('[data-popup_missao="' + targeted_popup_missao_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/* JQUERY - JANELA INTERVENÇÕES 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */

$('#intervencoes_text').click(function() {
    //----- PARA ABRIR A JANELA
    $('[data-popup_intervencoes-open]').on('click', function(e)  {
        var targeted_popup_intervencoes_class = jQuery(this).attr('data-popup_intervencoes-open');
        $('[data-popup_intervencoes="' + targeted_popup_intervencoes_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- PARA FECHAR A JANELA
    $('[data-popup_intervencoes-close]').on('click', function(e)  {
        var targeted_popup_intervencoes_class = jQuery(this).attr('data-popup_intervencoes-close');
        $('[data-popup_intervencoes="' + targeted_popup_intervencoes_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/* JQUERY - OUTRAS INFORMAÇÕES 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */


$('#info_text').click(function() {
    //----- PARA ABRIR A JANELA
    $('[data-popup_info-open]').on('click', function(e)  {
        var targeted_popup_info_class = jQuery(this).attr('data-popup_info-open');
        $('[data-popup_info="' + targeted_popup_info_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- PARA FECHAR A JANELA
    $('[data-popup_info-close]').on('click', function(e)  {
        var targeted_popup_info_class = jQuery(this).attr('data-popup_info-close');
        $('[data-popup_info="' + targeted_popup_info_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/* JQUERY - GALERIA 
   O Código do Pop-Up jQuery, foi inspirado do trabalho CiberKids.   
   Webgrafia: http://inspirationalpixels.com */
    
var $big= $("#grandes img");
    var $small = $('.pequenas img');
    $big.not(':first').hide();
    $small.first().addClass('selected');
    /* QUANDO CLICA NAS IMAGENS PEQUENAS ('.pequenas img'), APARECE A IAMGEM SELECIONADA NAS ("#grandes img")  */
    $small.click(function(e){
        $small.removeClass('selected');
        var i = $(this).addClass('selected').index();
        $big.hide().eq(i).show();
    });
    

/* ESTE CÓDIGO SERVE PARA SELECIONAR A IMAGEM PRETENDIDA*/
    $('#1, #2, #3, #4, #5, #6').click(function(){
        $('#fotografia').css({"display":"block"});
        // Obter o source da imagem
        var modalImg = $('#img01')[0];
        modalImg.src = this.src;
    });
    /* BOTÃO FECHAR*/
    var span = $('.fechar');
   /* QUANDO SE CLICA FECHA A JANELA MODEL E VOLTA PARA A PÁGINA INDEX*/
    $('span').click(function(){
        $('#fotografia').css({"display":"none"});
    });
