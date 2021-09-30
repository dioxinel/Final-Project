import { useState } from "react"


export const useFormFields = (initialValues) => {
  const [fields, setFormFields] = useState(initialValues)
  const reset = () => {
    setFormFields(initialValues)
  }
  const changeFieldValue = (evt) => {
    const { name, value } = evt.target;

    setFormFields(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return { fields, changeFieldValue, reset }
}