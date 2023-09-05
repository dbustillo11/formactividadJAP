document.getElementById('datauser').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('fname').value;
    const apellido = document.getElementById('lname').value;
    const bday = document.getElementById('bday').value;

    // Data del form
    const userData = {
        name: name,
        apellido: apellido,
        bday: bday
    };

    const url = "https://jsonplaceholder.typicode.com/users";

    const solicitudPost = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    //solicitud POST con fetch

    fetch(url, solicitudPost)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo enviar la data");
            }
            return response.json();
        })
        .then(data => {
            console.log("Nuevo usuario creado", data);
        })
        .catch(error => {
            console.error("Error", error);
        });
});

