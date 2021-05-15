function check_id() {

    var value = document.getElementById('user').value;
    var check = 1;
    if (value != 'Quang') {
        check = 0;
    }
    var value = document.getElementById('pass').value;
    if (value != 123456) {
        check = 0;
    }
    if (check == 1) {
        location.replace("http://facebook.com");
    }

}