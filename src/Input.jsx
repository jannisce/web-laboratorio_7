import React from "react"
import "./Input.css"

const Input = () => {
  return (
    <div>
      <form className="search_form">
        <input
          className="search_input"
          placeholder="Busca en la red sin que te rastreen"
          type="text"
          tabIndex={-1}
        />
        <input className="search_button" type="submit" tabIndex={-2} />
      </form>
    </div>
  )
}

export default Input
