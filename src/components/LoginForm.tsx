import { SyntheticEvent } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    console.log(form, {
      email,
      password,
    });
  };

  return (
    <section className="flex flex-col justify-center items-center gap-15 px-36 py-18 border border-amber-100 rounded-3xl text-white shadow-md shadow-black/50  backdrop-blur-md">
      <h1 className="text-4xl">Login Form</h1>
      <form onSubmit={submitForm} className="flex flex-col gap-4 w-full">
        <TextField
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          value={email}
          type="email"
          label="Email"
          variant="outlined"
          className="text-white"
          />
        <TextField
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          value={password}
          type="password"
          label="Password"
          variant="outlined"
          className="text-white"
        />
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </section>
  );
};

export default LoginForm;
