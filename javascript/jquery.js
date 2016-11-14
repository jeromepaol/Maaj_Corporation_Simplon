$(document).ready(function() {
	
       $('.js-scrollTo').on('click', function() { // Au clic sur un élément
          
          var page = $(this).attr('href'); // Page cible
          var speed = 750; // Durée de l'animation (en ms)
          
          $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
          return false;
          
        });


		$('#email-icon').on('click', function(){
    		$('#open-email-form:target').addClass('hidden');
    	});

	
		$('#close').on('click', function(){
			$('#open-email-form.hidden:target').removeClass('hidden');
		});	
		
});
window.onscroll = function() {
    var scroll = (document.documentElement.scrollTop ||
        document.body.scrollTop);
    var scroll_bottom = (document.documentElement.scrollBottom || document.body.scrollTop);            
    if(scroll>245) {  //Quand le scroll atteint 245 
                     //Le back to top apparait en fadeIn
        
        document.getElementById('fleche-up').display = ("block"); 
        $('#fleche-up').fadeIn('slow');
    }

    else 
        if (scroll_bottom<=500) { //Quand le scroll vers le haut est inférieur ou égal a 500
        $('#fleche-up').fadeOut('slow'); //Le back to top disparait en Fadeout
    }

            
            } 