import React, { useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
})

const Form = (props) => {
  const { children } = props

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    }

    // Update state
    setForm(updatedForm)
  }

  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
