import { useContext } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { FormContext } from './Form'

const FormInput = (props) => {
  const { label, type = 'text', name } = props

  const formContext = useContext(FormContext)
  const { form, handleFormChange } = formContext

  return (
    <div css={inputStyle}>
      <label>{label}</label>
      {type == 'textarea' ? (
        <textarea name={name} value={form[name]} onChange={handleFormChange} />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleFormChange}
        />
      )}
    </div>
  )
}

export default FormInput

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
`
