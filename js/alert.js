jQuery(document).ready(function($) {
	window.realAlert=window.alert
	window.alert=function(s){
		customAlert(s)
	}

	function customAlert(s) {
		if($('#customalert')[0]) {
			if($('#customalert').hasClass('on')) {
				$('#customalert').find('.alerttext').html(s);
			}else{
				$('#customalert').addClass('on').find('.alerttext').html(s);
			}
		}else{
			$('body').append('<div id="customalert" class="on"><span class="alerttext">' + s + '</span><span id="contact-remove-sign"></span></div>');
		}
		$('#customalert').fadeIn(1500);
	}
	
	$(document).on('click', '#customalert', function(){
		$(this).removeClass('on').fadeOut();
	});
	
});