import React, { SyntheticEvent } from "react";

class LoginClassForm extends React.Component {
  state = {
    email: "",
    password: "",
  };
  submitForm(ev: SyntheticEvent) {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, this.state);
  }

  render(): React.ReactNode {
    return (
      <section className="flex flex-col justify-center items-center gap-6 px-36 py-18 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
        <h1 className="text-4xl font-semibold">Login Form</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={this.submitForm.bind(this)}
        >
          <input
            onChange={(ev) => {
              this.setState({
                email: ev.target.value,
              });
            }}
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-xl"
          />
          <input
            onChange={(ev) => {
              this.setState({
                password: ev.target.value,
              });
            }}
            type="password"
            placeholder="Enter your password"
            className="p-2 rounded-xl"
          />
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default LoginClassForm;
