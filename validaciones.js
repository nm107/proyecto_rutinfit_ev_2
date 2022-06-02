function validar_inicio() {
    var email = document.formulario.txtemail.value
    var password = document.formulario.txtpass.value
    if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
        alert("El correo no existe")
        document.formulario.txtemail.focus()
        return false
    } if (password.length < 4) {
        alert("La contraseña es incorrecta")
        document.formulario.txtpass.focus()
        return false
    } else {
        alert("Inicio de sesion correcto !Gracias por volver " + email)
        document.formulario.submit()
    }


}
function validacion_formulario() {
    var rut = document.formulario_form.txt_rut.value
    var nombre = document.formulario_form.txt_nombre.value
    var telefono = document.formulario_form.txt_telefono.value
    if (rut.length > 9 && rut.length < 10 || rut.indexOf('-') < 0) {
            alert('el rut ingresado no es valido')
            document.formulario_form.txt_rut.focus()
            return false
    } if (nombre.length < 2) {
        alert('ingrese su nombre completo')
        document.formulario_form.txt_nombre.focus()
        return false
    }if(telefono.length < 9 || telefono.length > 9 || telefono.substring(0,1)!='9'){
        alert('telefono incorrecto')
        document.formulario_form.txt_telefono.focus()
        return false
    }else{
        alert('Su peticion ha sido enviada correctamente' +
         ' rut: ' + rut + ' nombre: ' + nombre + ' telefono: ' + telefono)
        document.formulario_form.submit()
    }
}
function limpiar() {
    document.getElementById("txt_rut").value = "";
    document.getElementById("txt_nombre").value = "";
    document.getElementById("txt_telefono").value = "";
    document.getElementById("inputState").value = "";
    document.getElementById("floatingTextarea2").value = "";


}