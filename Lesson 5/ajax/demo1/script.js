$(function() {

    // Javascript
    const http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // console.log(`${this.status}: ${this.statusText}`);
            console.log(this.responseText);
        } else {
            console.error(`Adrians ERROR: ${this.status}: ${this.statusText}`)
            // window.location = '404.html';
        }
    }

    http.open('GET', 'test.txt', true);
    http.send();
});