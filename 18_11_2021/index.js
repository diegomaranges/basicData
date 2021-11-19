var sb = document.getElementById("submit");
var arr = [];

sb.addEventListener('click', () => {
    var node = document.getElementById("ans");

    var myValue = document.getElementById("exampleFormControlInput1").value;
    arr.push(myValue);
    localStorage.setItem('storage', JSON.stringify(arr)); //agregar o modificar

    var div = document.createElement('div');
    div.classList.add('d-block');
    div.innerText = myValue;
    //newDiv.value = myValue;
    node.appendChild(div);
    localStorage.removeItem(myValue); //remover

});

function loadStorage() {
    var parse = JSON.parse(localStorage.getItem('storage'));
    if (parse === null) 
        return;
    parse.forEach(e => {
        arr.push(e);
    });
    console.log(arr);
}

loadStorage();

document.getElementById('clean').addEventListener('click', () => {
    localStorage.clear();
});
