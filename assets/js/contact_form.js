function doValidate() {

	if ($("#contact_name").val() == "") {
		showLoginError(1);
		$("#contact_name").focus();
		return false;
	}
	if ( $("#contact_name").val().length < 2 ) {
		showLoginError(2);
		$("#contact_name").focus();
		return false;
	}

	if ( $("#contact_email").val() =="") {
		showLoginError(3);
		$("#contact_email").focus();
		return false;
	}

	var a = $("#contact_email").val();
	var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
	if(!filter.test(a)){
		showLoginError(4);
		$("#contact_email").focus();
		return false;
	}

	if ($("#contact_message").val() == "") {
		showLoginError(5);
		$("#contact_message").focus();
		return false;
	}
	if ( $("#contact_message").val().length < 2 ) {
		showLoginError(6);
		$("#contact_message").focus();
		return false;
	}
	return true;
}

function showLoginError(eID) {
	$('#msg_box').show();
	$("#msg_box").addClass('msg_error');

	if (eID == 1) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> Your <b>Name</b> please.</p>");
	}
	else if (eID == 2) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> At least two characters in the <b>Name</b> box please.</p>");
	}
	else if (eID == 3) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> Your <b>Email Address</b> please.</p>");
	}
	else if (eID == 4) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> Enter a <b>valid</b> Email Address please.</p>");
	}
	else if (eID == 5) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> Your <b>Message</b> please.</p>");
	}
	else if (eID == 5) {
		$('#msg_box').html("<p><i class=\"fas fa-exclamation-triangle\"></i> At least two characters in the <b>Message</b> box please.</p>");
	}

}

