var usuario;
var correo;
var pass;
var color;
var phone;
var cum = date("txtcum");
var obs ;

var passA;
var usuarioA;


function reg(){
    document.getElementById("reg").style.display="block";
    document.getElementById("log").style.display="none";
}
function log(){
    document.getElementById("log").style.display="block";
    document.getElementById("reg").style.display="none";
}

function validaReg(){
    usuario = document.getElementById("txtnom").value;
    correo = document.getElementById("txtcorreo").value;
    pass = document.getElementById("txtpsw").value;
    color = document.getElementById("colorS").value;
    phone = document.getElementById("txttel").value;
    cum = document.getElementById("txtcum").value;
    obs = document.getElementById("txtobs").value;

    let salir = 0;

        if(usuario=="null"){
            console.log("El usuario no puede estar vacio");
        }else{
            if (correo=="null") {
                console.log("El Correo no puede estar vacio");
            }else{
                if (pass =="null") {
                    console.log("La Contraseña no puede estar vacia");
                } else {
                    if (color=="null") {
                        console.log("Porfavor seleccione un color");
                    }else{
                        alert("Los datos ingresador son: "
                        +usuario+" "
                        +correo+" "
                        +pass+" "
                        +color+" "
                        +phone+" "
                        +cum+" "
                        +obs);
                    log();
                }
                }
            }
        }
    }// salir //

    function validaLog(){
        usuarioA = document.getElementById("txtnom1").value; 
        passA = document.getElementById("txtpass").value;

        if(usuario !=usuarioA){
            alert("Usuario Invalido");
        }else{
            if(pass !=passA){
                alert("Contraseña Invalida");
            }else{
                alert("Ingreso Exitoso");
                mostrarDatos();
            }
        }
    }

    function mostrarDatos(){
      document.getElementById("reg").style.display="none";
      document.getElementById("log").style.display="none";
      document.getElementById("perfil").style.display="block";
      
      
      document.getElementById("outusr").innerHTML = usuario;
      document.getElementById('outcorreo').innerText = correo ;
      document.getElementById('outpass').innerText = pass ;
      document.getElementById('outcolor').innerText = color ;
      document.getElementById('outphone').innerText = phone ;
      document.getElementById('outcum').innerText = cum ;
      document.getElementById('outobs').innerText = obs ;
    }