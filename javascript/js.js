/* FORM VERIFY
==================================================================================== */

/* FORM RESET FUNCTION
==================================================================================== */
function resetform(){
    //efface les champs du formulaire
    document.getElementById("contact_form").reset();
}


function retour_ini(){
    
    document.getElementById("name_input").placeholder="Votre nom";
    document.getElementById('first_name_input').placeholder="Votre prénom";
    document.getElementById('email_input').placeholder="Votre email";
    document.getElementsByName("name")[0].style.color='white';
    document.getElementsByName("first-name")[0].style.color='white';
    document.getElementsByName("email-addy")[0].style.color='white';
   // document.getElementById("name_input").style.border='none'; A y revenir 
    
    
    
}

function onBlur () {
    var user_name = document.getElementById('name_input');
    var user_fname = document.getElementById('first_name_input');
    var user_email = document.getElementById('email_input');
    var regexp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var message_area = document.getElementById('message_area');
    var compte_mot = message_area.value.split(" ");
    
    
    if (user_name.value.length > 3) {
        user_name.className = 'valide';
    }
    else {
        user_name.className = 'error';
        
        //setTimeout(retour_ini, 3000);
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

/* VERIFY FUNCTIONS
==================================================================================== */		
/* NAME VERIFY FUNCTION
==================================================================================== */	
	var user_name = document.getElementById('name_input');

	function verify_name() {
		if (user_name.value.length > 3) {
			document.getElementsByName("name")[0].value="";
			//document.getElementsByName("name")[0].placeholder="Merci!";
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
			document.getElementsByName("first-name")[0].value="";
			
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
			document.getElementsByName("email-addy")[0].value="";
			
  		}
	}
    
    
    

/* END OF VERIFY FUNCTIONS
==================================================================================== */	
verify_name();
verify_fname();
verify_email();

/* END OF VALIDATE FUNCTION
==================================================================================== */	
}


/* FORM - ONCLICK LISTENERS 
==================================================================================== */	
document.getElementById("send_button").addEventListener("click", validate);
document.getElementById("reset_button").addEventListener("click", resetform);