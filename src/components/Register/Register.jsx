import { Loading, Report } from "notiflix";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUsersQuery, useRegisterUserMutation } from "../../services/api";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { data } = useGetUsersQuery();

  const checkIfUsernameIsTaken = (name, username, password) => {
    if (data.find((user) => user.username === username)) {
      Report.failure(
        "Username is taken",
        "Please choose other username",
        "Okay"
      );
    } else {
      registerUser({ name, username, password });
      Loading.hourglass("Registering New User...");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  const onRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;
    checkIfUsernameIsTaken(name, username, password);
    form.reset();
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onRegister}>
        <label>
          Full Name:{" "}
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label>
          username:{" "}
          <input
            name="username"
            type="text"
            placeholder="username"
            required
            pattern="^[a-z0-9_-]{3,25}$"
            title="Username has to be min. 3, max. 25 characters long, and may contain only lowercase letters, dash and numbers. "
          />
        </label>
        <label>
          password:{" "}
          <input
            name="password"
            type="text"
            placeholder="password"
            required
            pattern="^[a-zA-Z]\w{5,25}$"
            title="It's demo version, so password needs only lowercase letters and be min. 5 max. 25 characters long."
          />
        </label>
        <input type="submit" value="Create new user" />
      </form>
      <p>
        Already have account? <Link to="/login">Sign In</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
