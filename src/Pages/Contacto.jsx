import React, { useState } from "react";
import pandaImg from "../img/pandaAlTe.jpg";
import { Typography } from "@mui/material";
import { StyledContainer, Img, Form, Input } from "../Style/StyledContacto";
import { validarCampo, validarCorreo } from "../components/Validaciones";
import { StyledButon } from "../components/Componentes";

const ErrorState = {
  nombre: {
    error: false,
    message: "Tienen que ser al menos tres caracteres",
  },
  apellido: {
    error: false,
    message: "Tienen que ser al menos tres caracteres",
  },
  correo: {
    error: false,
    message: "Tienen que ser un correo valido",
  },
  asunto: {
    error: false,
    message: "Tienen que ser al menos tres caracteres",
  },
  // Puedes agregar más campos de error aquí si es necesario
};

const Contactos = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [errors, setErrors] = useState(ErrorState);

  return (
    <StyledContainer component="section"> 
      <Img src={pandaImg} alt="Panda Rojo al telefono" />
      <Form action="https://formsubmit.co/colindresj9@gmail.com" method="POST">
        <Typography variant="h3" component="h2" color="white">
          Contacto
        </Typography>
        <Input
          name="nombre"
          variant="filled"
          label="Nombre"
          value={nombre}
          required
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          error={errors.nombre.error}
          helperText={errors.nombre.error ? errors.nombre.message : ""}
          onBlur={(e) => validarCampo("nombre", e.target.value, setErrors)}
        />
        <Input
          name="apellido"
          variant="filled"
          label="Apellido"
          value={apellido}
          required
          type="text"
          onChange={(e) => setApellido(e.target.value)}
          error={errors.apellido.error}
          helperText={errors.apellido.error ? errors.apellido.message : ""}
          onBlur={(e) => validarCampo("apellido", e.target.value, setErrors)}
        />
        <Input
          name="correo"
          variant="filled"
          label="Correo"
          value={correo}
          required
          type="email"
          onChange={(e) => setCorreo(e.target.value)}
          error={errors.correo.error}
          helperText={errors.correo.error ? errors.correo.message : ""}
          onBlur={(e) => validarCorreo("correo", e.target.value, setErrors)}
        />
        <Input
          name="asunto"
          variant="filled"
          label="Asunto"
          value={asunto}
          required
          type="text"
          onChange={(e) => setAsunto(e.target.value)}
        />
        <StyledButon type="submit" sx={{ width: "95%" }}>
          Enviar
        </StyledButon>
        <input
          type="hidden"
          name="_next"
          value="https://portafolio2-0-one.vercel.app/Envio"
        />
        <input type="hidden" name="_captcha" value="false" />
      </Form>
    </StyledContainer>
  );
};

export default Contactos;
