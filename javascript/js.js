/* TEST VERIFY
=====zfj=============================================================================== */


/* FORM RESET FUNCTION
==================================================================================== */
function resetform(){
    //efface les champs du formulaire
    var reset_name = document.getElementById('name_input');
    var reset_fname = document.getElementById('first_name_input');
    var reset_email = document.getElementById('email_input');
    var reset_message_area = document.getElementById('message_area');
    document.getElementById("contact_form").reset();
    reset_name.className = 'reset_formulaire';
    reset_fname.className = 'reset_furmulaire';
    reset_email.className = 'reset_formulaire';
    reset_message_area.className = 'reset_formulaire';
    
   
    
}


function retour_ini(){
    //Rénitialisation des champs du formulaire
    document.getElementById("name_input").placeholder="Votre nom";
    document.getElementById('first_name_input').placeholder="Votre prénom";
    document.getElementById('email_input').placeholder="Votre email";
    document.getElementById('message_area').placeholder="Votre message";
    document.getElementsByName("name")[0].style.color='white';
    document.getElementsByName("first-name")[0].style.color='white';
    document.getElementsByName("email-addy")[0].style.color='white';
    document.getElementsByName("msg")[0].style.color='white';
    

    
    
    
}



function onBlur () {
    //Fonction onblur sur les inputs du formulaire = vert si la condition est rempli || rouge si la condition est fausse 
    var user_name = document.getElementById('name_input');
    var user_fname = document.getElementById('first_name_input');
    var user_email = document.getElementById('email_input');
    var regexp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var message_area = document.getElementById('message_area');
    var compte_mot = message_area.value.split(" ");
    //Pour le moment cette fonction affécte tout les inputs sans même avoir eu le temps d'y rentré quoi que ce soit (d'un point de vue utilisateur)
    //A amélioré , faire 4 function differente pour que la fonction verifie les conditions une par une.
    if (user_name.value.length > 3) {
        user_name.className = 'valide';
        
    }
    else {
        user_name.className = 'error';
        
        
    }
    
    if (user_fname.value.length > 1) {
        user_fname.className = 'valide';
       
    }
    else {
        user_fname.className = 'error';
    }

    
    if (!regexp_email.test(user_email.value)) {
        user_email.className = 'error';
        
    }
    else {
        user_email.className = 'valide';
        
    }


     if (compte_mot.length >= 2 && compte_mot[1] != "") {
         message_area.className = 'valide';
         
     }
    else {
        message_area.className = 'error';
    }
    
}
 

    
/* VALIDATE FUNCTION
==================================================================================== */	
function validate () {
    //Fonction qui va verifier que toutes les conditions son rempli pour l'envoi d'un formulaire
var valide = 0;
/* VERIFY FUNCTIONS
==================================================================================== */	
 
   
/* NAME VERIFY FUNCTION
==================================================================================== */	
	var user_name = document.getElementById('name_input');

	function verify_name() {
		if (user_name.value.length > 3) {
			//document.getElementsByName("name")[0].value="";
            valide++;
        }

		else {
			document.getElementsByName("name")[0].value="";
			document.getElementsByName("name")[0].placeholder="Votre nom doit comporter au moins 3 caractères!";
			document.getElementsByName("name")[0].style.color='red';
            setTimeout(retour_ini, 3000);
		}
	}


/* FIRST NAME VERIFY FUNCTION
==================================================================================== */	
	var user_fname = document.getElementById('first_name_input');

	function verify_fname() {
		if (user_fname.value.length > 1) {
			//document.getElementsByName("first-name")[0].value="";
			valide++;
		}

		else {
			document.getElementsByName("first-name")[0].value="";
			document.getElementsByName("first-name")[0].placeholder="Votre prénom doit comporter au moins 1 caractère!";
			document.getElementsByName("first-name")[0].style.color='red';
		}
	}


/* EMAIL VERIFY FUNCTION
==================================================================================== */	
	var user_email = document.getElementById('email_input');
		
	function verify_email() {
		
   		var regexp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   		
  		if (!regexp_email.test(user_email.value)) {
			document.getElementsByName("email-addy")[0].value="";
			document.getElementsByName("email-addy")[0].placeholder="Votre e-mail doit être valide.";
			document.getElementsByName("email-addy")[0].style.color='red';
			
   		}
   		
   		else {
			
			valide++;
  		}
	}
    
    
    var message_area = document.getElementById('message_area');
    var compte_mot = message_area.value.split(" ");
    
    function verify_text_area() {
        if (compte_mot.length >= 2 && compte_mot[1] != "") {
          
          valide++;  
         
     }
    else {
        document.getElementsByName("msg")[0].placeholder="Votre message doit au moins contenir 2 mots.";
        document.getElementsByName("msg")[0].value="";
        document.getElementsByName("msg")[0].style.color='red';
        setTimeout(retour_ini, 3000);
    }
        
        
}
    
    function confirmMessage(){
	 //Demande a l'utilisateur confirmation de l'envoi du formulaire
   var form = document.getElementById("contact_form");
        
     
    
    
   
     
     check = confirm("Envoyer ?");
    if(check==true){
        
        return fermeture();
       
        
    }
 }
   
    function fermeture (){
        //Ferme le formulaire si l'utilisateur a confirmer son envoi
        var close = document.getElementById("open-email-form");
        
       $('#open-email-form').fadeOut('slow');
        
        return reset_formulaire_after_refresh ();
       
            
        
}
    
    function reset_formulaire_after_refresh (){
    //Reset formulaire aprés la fermeture.
    var reset_name = document.getElementById('name_input');
    var reset_fname = document.getElementById('first_name_input');
    var reset_email = document.getElementById('email_input');
    var reset_message_area = document.getElementById('message_area');
    document.getElementById("contact_form").reset();
    reset_name.className = 'reset_formulaire';
    reset_fname.className = 'reset_furmulaire';
    reset_email.className = 'reset_formulaire';
    reset_message_area.className = 'reset_formulaire';
    document.getElementById("name_input").placeholder="Votre nom";
    document.getElementById('first_name_input').placeholder="Votre prénom";
    document.getElementById('email_input').placeholder="Votre email";
    document.getElementById('message_area').placeholder="Votre message";
    document.getElementsByName("name")[0].style.color='white';
    document.getElementsByName("first-name")[0].style.color='white';
    document.getElementsByName("email-addy")[0].style.color='white';
    document.getElementsByName("msg")[0].style.color='white';
        
        return refresh_window();
    }
    
    function refresh_window (){
       //Refresh la page aprés l'envoi du formulaire 
        //le probléme que l'on a rencontré , une fois que le formulaire était envoyer , impossible de le réouvrir sans raffraichir la page.
        //Grace a cette fonction l'utilisateur peut de nouveau ouvrir le formulaire aprés l'envoi.
        setTimeout(fermeture , 3000)
        var initialPage = setTimeout(location.pathname , 3000);
        
       location.replace('file:///C:/Users/gerard/Documents/Projet-Simplon-Nice-GitKracken/index.html#close') || location.replace('file:///C:/Users/gerard/Documents/Projet-Simplon-Nice-GitKracken/ecolesimplon/index.html#close') || location.replace('file:///C:/Users/gerard/Documents/Projet-Simplon-Nice-GitKracken/simplonnice/index.html#close') || location.replace('file:///C:/Users/gerard/Documents/Projet-Simplon-Nice-GitKracken/promo/index.html#close') || location.replace('file:///C:/Users/gerard/Documents/Projet-Simplon-Nice-GitKracken/medias/index.html#close');
        window.location.reload();
        
        
    }
    
    
    
    
    
    
  
     
    
    
  
  
 
        
    
    
    
    

/* END OF VERIFY FUNCTIONS
==================================================================================== */	

verify_name();
verify_fname();
verify_email();
verify_text_area();

    

/* VERIFY FUNCTIONS
==================================================================================== */	
 
   if ( valide >= 4) {
            return confirmMessage();
        } 
    
}


/* END OF VALIDATE FUNCTION
==================================================================================== */	



/* FORM - ONCLICK LISTENERS 
==================================================================================== */

document.getElementById("send_button").addEventListener("click", validate);
document.getElementById("reset_button").addEventListener("click", resetform);