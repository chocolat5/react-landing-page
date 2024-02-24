import { createContext, useMemo, useContext } from "react";

export const FormContext = createContext({
  form: {},
  handleFormChange: () => {},
});

export function useForm() {
  return useContext(FormContext);
}

function Form(props) {
  const { children } = props;

  const formData = useMemo(
    () => ({
      firstName: {
        value: "",
        error: null,
      },
      lastName: {
        value: "",
        error: null,
      },
      email: {
        value: "",
        error: null,
      },
      message: {
        value: "",
        error: null,
      },
    }),
    []
  );

  const handleFormChange = (e) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = e.target;

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...formData,
      [name]: {
        value,
        error: null,
      },
    };

    // Update state
    return updatedForm;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("form submitted", formData);
  };

  return (
    <FormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        formData,
        handleFormChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default Form;
