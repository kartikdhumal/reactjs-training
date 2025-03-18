import { useState } from "react";
import validator, { isAlpha } from 'validator'
import InputField from './components/InputField'
import Button from "./components/Button";
import "./styles/main.scss";

function App() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  function handleChange(name, value) {
    setFormData((prev) => {
      return { ...prev, [name]: value }
    });

    if (name === "password") {

      const checks = {
        length: validator.isLength(value, { min: 8 }),
        uppercase: validator.matches(value, /[A-Z]/),
        number: validator.matches(value, /\d/),
        specialChar: validator.matches(value, /[\W_]/),
      };


      setPasswordChecks(checks);

      let strength = Object.values(checks).filter(Boolean).length * 25;
      setPasswordStrength(strength);
    }
  }


  function handleSubmit(e) {
    const { name, email, password } = formData;
    e.preventDefault();
    if (!name && !email && !password) {
      alert("All fields are required");
      return;
    }
    if (!isAlpha(name, "en-US", { ignore: " " })) {
      alert("Only characters are allowed in name");
      return;
    }
    if (!validator.isEmail(email)) {
      alert("Invalid email format!");
      return;
    }
    if (passwordStrength < 100) {
      alert("Your password is not strong enough!");
      return;
    }
    alert("Form Submitted");
    setFormData({ name: "", email: "", password: "" });
    setPasswordStrength(0);
    setPasswordChecks({ length: false, uppercase: false, number: false, specialChar: false });

  }

  return (
    <div className="container">
      <form className="form" method="post">
        <InputField
          label="Name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("Name", e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("Email", e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange("Password", e.target.value)}
        />

        <div className="password-strength">
          <ul className="password-rules">
            <li style={{ color: passwordChecks.length ? "green" : "red" }}>
              ✔ At least 8 characters
            </li>
            <li style={{ color: passwordChecks.uppercase ? "green" : "red" }}>
              ✔ At least 1 uppercase letter (A-Z)
            </li>
            <li style={{ color: passwordChecks.number ? "green" : "red" }}>
              ✔ At least 1 number (0-9)
            </li>
            <li style={{ color: passwordChecks.specialChar ? "green" : "red" }}>
              ✔ At least 1 special character (@, #, $, etc.)
            </li>
          </ul>
        </div>

        <Button text="Submit" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default App
