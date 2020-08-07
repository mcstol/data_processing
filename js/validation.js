function emailValidation(event){
    digitEmail = $("#aligned-email").val()
    if (digitEmail == "teste@email.com"){
        console.log("e-mail valido")
    }
    else{
        alert("email incorreto")
    }
}
function passwordValidation(event){
    //event.preventDefault()
    digitPassword = document.getElementById("aligned-password").value
    if (digitPassword == "12345"){
        console.log("chamou outra pagina")
       //window.open(/DashBoard.html)
        location.replace("/DashBoard.html");

    }
    else{
        alert("Senha incorreta!")
    }
}