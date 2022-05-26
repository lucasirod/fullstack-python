const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	Usuario: false,
	Password: false,
	Mail: false,
}

const validarFormulario = (e) => {
    console.log(`Validando ${e.target.name}`);
	switch (e.target.name) {
		case "txtUsuario":
			validarCampo(expresiones.usuario, e.target, 'Usuario');
		break;
		case "txtPassword":
			validarCampo(expresiones.password, e.target, 'Password');
		break;
		case "txtMail":
            validarEmail();
		break;
		case "txtMail2":
			validarEmail();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form${campo}`).classList.remove('form-grupo-incorrecto');
		document.getElementById(`form${campo}`).classList.add('form-grupo-correcto');
		document.querySelector(`#form${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#form${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#form${campo} .form-input-error`).classList.remove('form-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`form${campo}`).classList.add('form-grupo-incorrecto');
		document.getElementById(`form${campo}`).classList.remove('form-grupo-correcto');
		document.querySelector(`#form${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#form${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#form${campo} .form-input-error`).classList.add('form-input-error-activo');
		campos[campo] = false;
	}
}

const validarEmail = () => {
	const inputMail1 = document.getElementById('txtMail');
	const inputMail2 = document.getElementById('txtMail2');
    console.log(`Comparando ${inputMail1.value} con ${inputMail2.value}`);

	if(inputMail1.value !== inputMail2.value){
		document.getElementById(`formMail`).classList.add('form-grupo-incorrecto');
		document.getElementById(`formMail`).classList.remove('form-grupo-correcto');
		document.querySelector(`#formMail i`).classList.add('fa-times-circle');
		document.querySelector(`#formMail i`).classList.remove('fa-check-circle');
		document.querySelector(`#formMail .form-input-error`).classList.add('form-input-error-activo');
        document.getElementById(`formMail2`).classList.add('form-grupo-incorrecto');
		document.getElementById(`formMail2`).classList.remove('form-grupo-correcto');
		document.querySelector(`#formMail2 i`).classList.add('fa-times-circle');
		document.querySelector(`#formMail2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#formMail2 .form-input-error`).classList.add('form-input-error-activo');
		campos['Mail'] = false;
	} else {
		document.getElementById(`formMail`).classList.remove('form-grupo-incorrecto');
		document.getElementById(`formMail`).classList.add('form-grupo-correcto');
		document.querySelector(`#formMail i`).classList.remove('fa-times-circle');
		document.querySelector(`#formMail i`).classList.add('fa-check-circle');
		document.querySelector(`#formMail .form-input-error`).classList.remove('form-input-error-activo');
        document.getElementById(`formMail2`).classList.remove('form-grupo-incorrecto');
		document.getElementById(`formMail2`).classList.add('form-grupo-correcto');
		document.querySelector(`#formMail2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#formMail2 i`).classList.add('fa-check-circle');
		document.querySelector(`#formMail2 .form-input-error`).classList.remove('form-input-error-activo');
		campos['Mail'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); //para que no se pueda enviar la primera vez

    console.log(`Usuario: ${campos.Usuario}, Password ${campos.Password}, Mails: ${campos.Mail}`);
	if(campos.Usuario && campos.Password && campos.Mail){
		formulario.reset();
        console.log(`FORMULARIO OK`);
		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form-grupo-correcto').forEach((icono) => {
			icono.classList.remove('form-grupo-correcto');
		});
	} else {
        console.log(`FALTAN CAMPOS`)
		document.getElementById('formMensaje').classList.add('formMensaje-activo');
        setTimeout(() => {
			document.getElementById('formMensaje').classList.remove('formMensaje-activo');
		}, 5000);
	}
});