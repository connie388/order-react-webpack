import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const AddProductLineForm = () => {
  // Bind the input fields
  const [inputValue, setInputValue] = useState({
    productLine: "",
    textDescription: "",
    htmlDescription: "",
    imageUrl: "",
  });
  const { productLine, textDescription, htmlDescription, imageUrl } =
    inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for debug only
    alert(
      `Submitting  ${inputValue.productLine} ${inputValue.textDescription} ${inputValue.htmlDescription} ${inputValue.imageUrl}`
    );
    setInputValue({
      productLine: "",
      textDescription: "",
      htmlDescription: "",
      imageUrl: "",
    });
  };

  return (
    <form id="productLine" className="center-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Product Line.</legend>
        <InputField
          type="text"
          value={productLine}
          placeholder="Product Line"
          label="Enter Product Line"
          name="productLine"
          onChange={handleChange}
        />
        <InputField
          type="text"
          value={textDescription}
          placeholder="Text Description"
          label="Enter Text Description"
          name="textDescription"
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          value={htmlDescription}
          placeholder="HTML Description"
          label="Enter HTML Description"
          name="htmlDescription"
          onChange={handleChange}
        />
        <InputField
          type="text"
          value={imageUrl}
          placeholder="Image URL"
          label="Enter Image URL"
          name="imageUrl"
          onChange={handleChange}
        />

        <div className="center">
          <Button className="float-child" type="submit">
            Add
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddProductLineForm;
