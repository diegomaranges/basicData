var myInit = {
    method:"PATCH",
    body:JSON.stringify(
        {
            title: 'diego',
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
};
/*{
    method:"POST",
    body:JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
}; //get obtener, post subir*/

async function myfetch() {
    //var limit = prompt('ingrese un numero');
    await fetch('https://fakestoreapi.com/productsaaa/5', myInit)
                .then(res => {
                    if(res.ok) {
                        return res.json();
                    }
                })
                //.then(rest=>res.json())
                .then(json => {
                    console.log(json);
                   /* console.log(json[1].title + " - " + json[1].price);
                    for (let i = 0; i < json.length; i++) {
                        var div = document.getElementById("test");
                        var newElement = document.createElement('div').appendChild(document.createTextNode(json[i].title + " - " + json[i].price));
                        div.appendChild(newElement);
                        div.appendChild(document.createElement('br'));
                    }*/
                })
                .catch(err => { // !== 2xx
                    console.log(err);
                    var div = document.getElementById("test");
                    var newElement = document.createElement('div').appendChild(document.createTextNode("Mens Casual Premium Slim Fit T-Shirts" + " - " + 22.3));
                    div.appendChild(newElement);
                    div.appendChild(document.createElement('br'));
                });
        fetch('https://fakestoreapi.com/products/5')
            .then(res=>res.json())
            .then(json=>console.log(json));
}

myfetch();

//si yo agrego un elemento con un metodo post el servidor me retorne el id de mi nuevo elemento
