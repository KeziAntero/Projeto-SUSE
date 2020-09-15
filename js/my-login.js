'use strict';

$(function() {

	
	document.getElementById('eye').addEventListener('mousedown', function() {
		document.getElementById('pass').type = 'text';
	  });
	  
	  document.getElementById('eye').addEventListener('mouseup', function() {
		document.getElementById('pass').type = 'password';
	  });
	  
	  // Para que o password não fique exposto apos mover a imagem.
	  document.getElementById('eye').addEventListener('mousemove', function() {
		document.getElementById('pass').type = 'password';
	  });

	$(".my-login-validation").submit(function() {
		var form = $(this);
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
		form.addClass('was-validated');
	});
});
