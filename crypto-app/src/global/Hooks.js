import { useState } from "react"

export const useInputStr = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  }
}

export const useInputInt = initialValue => {
    const [value, setValue] = useState(initialValue)
  
    return {
      value,
      setValue,
      reset: () => setValue(0),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value)
        }
      }
    }
  }