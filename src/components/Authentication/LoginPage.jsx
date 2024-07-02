import React, { useRef } from "react";
import "./LoginPage.css";
const LoginPage = () => {
  const passwordRef = useRef(null);
  return (
    <section className="align_center form_page">
      <form className="authentication_form">
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="password"
              ref={passwordRef}
              id="phone"
              className="form_text_input"
              placeholder="Enter Your Phone Number"
            />
            <button
              type="button"
              onClick={() => (passwordRef.current.type = "password")}
            >
              Hide Password
            </button>
            <button
              type="button"
              onClick={() => (passwordRef.current.type = "text")}
            >
              Show Password
            </button>
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
export default LoginPage;
