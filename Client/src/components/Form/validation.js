const validate = (name, value) => {
    let errors = {};

    switch (name) {
        case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                errors.email = "El email no puede estar vacío.";
            } else if (!emailRegex.test(value)) {
                errors.email = "Por favor introduce un email válido.";
            } else if (value.length > 35) {
                errors.email = "El email no puede tener más de 35 caracteres.";
            }
            break;

        case "password":
            const passwordRegex = /^(?=.*\d).{6,10}$/;
            if (!value) {
                errors.password = "La contraseña no puede estar vacía.";
            } else if (!passwordRegex.test(value)) {
                errors.password = "La contraseña debe tener al menos un número y tener entre 6 y 10 caracteres.";
            }
            break;

        default:
            break;
    }

    return errors;
};      

export default validate;