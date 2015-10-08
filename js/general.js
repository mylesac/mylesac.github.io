$(document).ready(function() {
	$('#contact-form').on('keyup', 'textarea,input', function() {
		console.log('WTF');
		var valid = true;

		$('#contact-form').find('textarea,input').each(function() {
			if ($(this).val().length === 0)
				valid = false;
		});

		if (valid)
			$('#submit-contact-form').removeAttr('disabled');
		else
			$('#submit-contact-form').attr('disabled','disabled');
	});

	$('#submit-contact-form').on('click', function() {
		var attrs = {};

		$('#contact-form').find('[name]', function() {
			attrs[$(this).attr('name')] = $(this).val();
		});

		$.post('php/email.php', attrs);

		$('#contact-container > .form').toggleClass('hidden', true);
		$('#contact-container > .success').toggleClass('hidden', false);
	});
});