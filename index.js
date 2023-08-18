
function encrypt(text) {
    var endata = btoa(text);
    document.write("Encrypted Text: " + endata + "<br>");
}
function decrypt(text1) {
    var dedata = atob(text1);
    document.write("decrypted Text: " + dedata + "<br>");
}
