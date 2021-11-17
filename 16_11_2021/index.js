suma = (a, b) => {
    console.log(a + b);
    return a + b;
}

suma(1, 2);

// require the module as normal
var bs = require("browser-sync").create();
import 'bootstrap/dist/css/bootstrap.css';

// .init starts the server
bs.init({
    server: "./"
});


document.getElementById("navbar").appendChild(Image);

// Now call methods on bs instead of the
// main browserSync module export
bs.reload("*.html");