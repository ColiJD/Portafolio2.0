function validarCampo(campo, valor, setErrors) {
  const regex = /^[A-Za-z ]*$/;
  if (valor.length >= 3 && regex.test(valor)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: { error: false, message: "" },
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: {
        error: true,
        message:
          "Tienen que ser al menos tres caracteres y no contener caracteres especiales ni numeros",
      },
    }));
  }
}

const validarCorreo = (campo, valor, setErrors) => {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (regex.test(valor)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: { error: false, message: "" },
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: {
        error: true,
        message: "Correo no valido 'Un ejemplo válido para un email es: usuario@dominio.com'",
      },
    }));
  }
};

export { validarCampo, validarCorreo };
