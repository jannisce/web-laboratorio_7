import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ className, children }) => {
  return (
    <div>
      <button type="button" className={className}>
        {children}
      </button>
    </div>
  )
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
export default Button
