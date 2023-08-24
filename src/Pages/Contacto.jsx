import React, { useState } from "react";
import pandaImg from "../img/pandaAlTe.jpg";
import { Typography} from "@mui/material";
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

  const HandleSubmit = (valores) => {
    console.log("APPJS: ", valores);
  };
  return (
    <StyledContainer>
      <Img src={pandaImg} alt="Panda Rojo al telefono" />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          HandleSubmit({
            nombre,
            apellido,
            correo,
            asunto,
          });
        }}
      >
        <Typography variant="h3" component="h2" color="white">
          Contacto
        </Typography>
        <Input
          id="nombre"
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
          id="apellido"
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
          variant="filled"
          label="Asunto"
          value={asunto}
          required
          type="text"
          onChange={(e) => setAsunto(e.target.value)}
        />
        <StyledButon
          type="submit"
          sx={{width: '95%'}}
          >Enviar</StyledButon>
      </Form>
    </StyledContainer>
  );
};

export default Contactos;
