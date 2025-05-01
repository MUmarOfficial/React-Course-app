import { SyntheticEvent } from "react";
import { useState } from "react";

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
    <section className="flex flex-col justify-center items-center gap-6 px-36 py-18 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
      <h1 className="text-4xl font-semibold">Login Form</h1>
      <form onSubmit={submitForm} className="flex flex-col gap-4 w-full">
        <input
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          value={email}
          type="email"
          placeholder="Email"
          className="p-2 rounded-xl"
        />
        <input
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          value={password}
          type="password"
          placeholder="Password"
          className="p-2 rounded-xl"
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
