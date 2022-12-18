import React, { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

const RegistrationForm = () => {
  // Bind the input fields
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
    accountType: "P",
    age: "",
    file: "",
    referrer: "",
    bio: "",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    terms,
    accountType,
    age,
    file,
    referrer,
    bio,
  } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const toggleCheckbox = () => {
    setInputValue((prev) => ({
      ...prev,
      terms: !inputValue.terms,
    }));
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for debug only
    alert(
      `Submitting  ${inputValue.bio} ${inputValue.referrer} ${inputValue.file} ${inputValue.age}`
    );
    setInputValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: "",
      accountType: "P",
      age: "",
      file: "",
      referrer: "",
      bio: "",
    });
  };

  return (
    <form id="register" className="center-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          Please fill out this form with the required information.
        </legend>
        <InputField
          type="text"
          value={firstName}
          placeholder="First Name"
          label="Enter Your First Name"
          name="firstName"
          onChange={handleChange}
        />
        <InputField
          type="text"
          value={lastName}
          placeholder="Last Name"
          label="Enter Your Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          value={email}
          placeholder="Email"
          label="Enter Your Email"
          name="email"
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          value={password}
          placeholder="Password (Minimum eight characters, at least one letter and one number)"
          label="Create a New Password"
          name="password"
          onChange={handleChange}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
        <InputField
          className="inline-form-control"
          type="radio"
          value="P"
          name="accountType"
          onChange={handleChange}
          required
        >
          {" "}
          Personal Account
        </InputField>
        <InputField
          className="inline-form-control"
          type="radio"
          value="B"
          name="accountType"
          onChange={handleChange}
          required
        >
          {" "}
          Business Account
        </InputField>
        <InputField
          className="inline-form-control"
          type="checkbox"
          value={terms}
          name="terms"
          onChange={toggleCheckbox}
          isChecked={inputValue.terms}
        >
          {" "}
          I accept the{" "}
          <a href="https://www.termsandconditionsgenerator.com/">
            terms and conditions
          </a>
        </InputField>
      </fieldset>
      <fieldset>
        <InputField
          type="file"
          value={file}
          label="Upload a profile picture"
          name="file"
          onChange={handleChange}
        />

        <InputField
          type="number"
          value={age}
          placeholder="Age"
          label="Input Your Age (Years)"
          name="age"
          onChange={handleChange}
          min="13"
          max="120"
        />

        <label>
          How did you hear about us?
          <select name="referrer" onChange={handleChange}>
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>

        <TextArea
          label="Provide a bio"
          name="bio"
          rows="3"
          cols="30"
          placeholder="I like coding on the beach..."
          value={bio}
          onChange={handleChange}
        />
        <div className="center">
          <Button className="float-child" type="submit">
            Submit
          </Button>

          {/* <Button className="float-child" variant="secondary">
            Cancel
          </Button> */}
        </div>
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
