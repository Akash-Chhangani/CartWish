import React, { useRef } from "react";
import "./LoginPage.css";
const LoginPage = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: "",
      phone: 0,
    };

    user.name = nameRef.current.value;
    user.phone = parseInt(phoneRef.current.value);
    console.log(user);
  };
  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              className="form_text_input"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              ref={phoneRef}
              className="form_text_input"
              placeholder="Enter Your Phone Number"
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
export default LoginPage;
