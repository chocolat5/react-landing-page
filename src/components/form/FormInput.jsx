import React from "react";
import { css } from "@emotion/react";

import { useForm } from "./Form";

const inputStyle = css`
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.4rem;
  }

  input {
    padding: 8px 12px;
    width: 100%;
    font-size: 1.4rem;
    border: 1px solid #ddd;
    border-radius: 2px;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 8px 12px;
    font-size: 1.4rem;
    border: 1px solid #ddd;
    border-radius: 2px;
  }
`;
export default function FormInput({
  label,
  type = "text",
  name,
  placeholder,
  required,
}) {
  const { formData, handleFormChange } = useForm();

  return (
    <div css={inputStyle}>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={formData[name.value]}
          placeholder={placeholder}
          onChange={handleFormChange}
          required={required}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={formData[name.value]}
          placeholder={placeholder}
          onChange={handleFormChange}
          required={required}
        />
      )}
    </div>
  );
}
