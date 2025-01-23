document.getElementById("form").addEventListener("submit",function (event) {
    event.preventDefault
    
    const form = document.getElementById("form");

    alert("your message has been! \n thanks for contacting us")
}
)
  function copynomor (){
    const nomor = document.getElementById("nomor");
    nomor.select();
    nomor.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(nomor.value).then(() => {
        alert("Copied To Clipboard Succesfully")
    })
  }


  function copyemail (){
    const email = document.getElementById("emailinput");
    email.select();
    email.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(email.value).then(() => {
        alert("Copied To Clipboard Succesfully")
    })
  }

  function resetform (){
    form.reset()
  }