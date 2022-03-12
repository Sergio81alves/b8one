// https://test-final.b8one.academy/
const acade = document.querySelector("#entrar");

acade.addEventListener("click", function(e){
    e.preventDefault();

    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    const value = email.value;
    const ba = senha.value;

    console.log(value);
    console.log(ba);
});
function fazPost(url, body){
    console.log("Body", body)
}

async function getData() {
    const data = await fetch('https://test-final.b8one.academy/', {
        method: 'POST',
        body: {
           
        "email" : email,
        "password" :password
        }
    });

    if(data.data.resposnse) {
        window.location.href = 'index.html'
    }else{

    }
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Email = " + email.value);
    console.log("Senha = " + password.value);

    fetch("https://test-final.b8one.academy/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  });





function mostrarOucultarSenha(){
    var senha  = document.getElementById("senha");
    if(senha.type == "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }
}