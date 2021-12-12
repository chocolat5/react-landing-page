import React, { createContext, useState, useContext } from 'react'

export const FormContext = createContext({
  form: {},
  handleFormChange: () => {},
})

export function useForm() {
  return useContext(FormContext)
}

const Form = (props) => {
  const { children } = props

  const [formData, setFormData] = useState({
    firstName: {
      value: '',
      error: null,
    },
    lastName: {
      value: '',
      error: null,
    },
    email: {
      value: '',
      error: null,
    },
    message: {
      value: '',
      error: null,
    },
  })

  const handleFormChange = (e) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = e.target

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...formData,
      [name]: {
        value: value,
        error: null,
      },
    }

    // Update state
    setFormData(updatedForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted', formData)
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        handleFormChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
