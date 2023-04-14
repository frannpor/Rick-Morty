import validate from "./validation";
import { useState } from "react";
import "./Form.css";

const Form = ({ login }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const HandleOnSubmit = (event) => {
    event.preventDefault(data);
    login(data);
  };

  const HandleOnChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    const newErrors = validate(name, value);
    setErrors(newErrors);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={HandleOnSubmit}>
        <h2>Por favor inicia sesión</h2>
        <label htmlFor="email"></label>
        <input
          placeholder="Email"
          type="text"
          id="email"
          name="email"
          value={data.email}
          onChange={HandleOnChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label htmlFor="password"></label>
        <input
          placeholder="Contraseña"
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={HandleOnChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button className="nav-btn" disabled={Object.keys(errors).length > 0}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
