import { useState } from 'react'

export const Input = ({ addCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handelChange = ({ target }) => {
    setInputValue(target.value)
  }


  const handelSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length < 1) return
    addCategories(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handelChange}
        placeholder='Busca tu Giff'
      />
    </form>

  )
}
