function myFetch() {
    fetch("promise.JSON")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        console.log("function finish")
    })
    .catch(function () {
        this.dataError = true;
    });
}

async function callFetch() {
    console.log("start fetch");
    await fetch("promise.JSON")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log(json.nombres[1].nombre);
        console.log(json.nombres[2].apellido);
    })
    .catch(function () {
        this.dataError = true;
    });
    console.log("finished fetch");
}

async function callFetch2() {
    console.log("start fetch 2");
    await myFetch();
    console.log("finished fetch 2");
}

callFetch();
callFetch2();