//import { Button } from 'bootstrap';
//import Toast from './node_modules/bootstrap/dist/js/bootstrap';
/*suma = (a, b) => {
    console.log(a + b);
    return a + b;
}

suma(1, 2);*/

// require the module as normal
require('@popperjs/core');
require('jquery');
require('jsdom-global');
var ts = require("bootstrap").Toast
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
    server: "./"
});

Array.from(document.querySelectorAll('.toast'))
.forEach(toastNode => new ts(toastNode));


// Now call methods on bs instead of the
// main browserSync module export
bs.reload("*.html, *.css");
bs.watch('*.html').on('change', bs.reload);
