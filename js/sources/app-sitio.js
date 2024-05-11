///////// CORREO DE CONTACTO ///////

function sendEmail() {

  document.getElementById("div-btn-email").classList.add("d-none")
  document.getElementById("alerta-enviando-email").classList.remove("d-none")
  emailjs.send("service_nfcb358", "template_7sxw6ds", {
    to_name: "Tatooine",
    from_name: document.getElementById("from_name").value,
    reply_to: document.getElementById("reply_to").value,
    message: document.getElementById("message_contact").value
  }).then(function (response) {
    document.getElementById("alerta-enviando-email").classList.add("d-none")
    document.getElementById("alerta-envio-email").classList.remove("d-none")
  }, function (error) {
    document.getElementById("alerta-enviando-email").classList.add("d-none")
    document.getElementById("alerta-fallo-envio-email").classList.remove("d-none")
  });

}

$("#form_contact").submit(async function () {

  let form = document.getElementById("form_contact")
  if (form.checkValidity()) {
    sendEmail()
  }

});

/* FIN EMAIL CONTACT */

/* EMAIL SUSCRIPTION */

  /* 
function sendSuscription(contacto) {
  document.getElementById("contenedor-input-newsletter").classList.add("desparecer-contenedor-input-newsletter")
  setTimeout(() => {
    document.getElementById("contenedor-input-newsletter").classList.toggle("d-none")
    document.getElementById("mensaje-suscripcion-ok").classList.add("aparecer")
    document.getElementById("mensaje-suscripcion-ok").classList.toggle("d-none")
  }, 1000)

}
 */

  function sendSuscription(contacto) {

    emailjs.send("service_nfcb358", "template_mqxltus", {
      reply_to: contacto,
    }).then(function (response) {
      document.getElementById("contenedor-input-newsletter").classList.add("desparecer-contenedor-input-newsletter")
      setTimeout(() => {
    document.getElementById("contenedor-input-newsletter").classList.toggle("d-none")
    document.getElementById("mensaje-suscripcion-ok").classList.add("aparecer")
    document.getElementById("mensaje-suscripcion-ok").classList.toggle("d-none")
  }, 1000)
    });
  }

  
  document.getElementById("btn-suscribirse").addEventListener("click", () => {
    const email = document.getElementById("email-newsletter")
    const contacto = email.value
    if (validarEmail(contacto)) {
      document.getElementById("btn-suscribirse").innerText = "Enviando...."
      sendSuscription(contacto)
    } else {
      document.getElementById("email-newsletter").classList.add("input-error")
    }
  })

  function validarEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
  }

  document.getElementById("email-newsletter").addEventListener("keypress", () => {
    document.getElementById("email-newsletter").classList.remove("input-error")
  })

  
  document.getElementById("btn-registro").addEventListener("click", ()=>{

    $('#form-us').modal("show")
    document.getElementById('form-us').reset();
    document.getElementById("usuario_us-2").value = "Hola"
    
  })
 
  /* FIN EMAIL SUSCRIPTION */