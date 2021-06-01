import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  inputs = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password", type: "password" },
    { name: "name", label: "Name" },
  ];

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.inputs.map(({ name, label, type }) => (
            <div key={name}>{this.renderInput(name, label, type)}</div>
          ))}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
