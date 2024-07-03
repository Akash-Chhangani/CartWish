import React, { useRef, useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter Your Name"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name?.type === "required" && (
              <em className="form_error">Please enter your name</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_error">Please enter at least 3 character</em>
            )}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="form_text_input"
              placeholder="Enter Your Phone Number"
              {...register("phone", { valueAsNumber: true })}
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
import "./LoginPage.css";
import { useForm } from "react-hook-form";
export default LoginPage;
