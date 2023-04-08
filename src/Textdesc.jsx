import React from "react"
import "./Textdesc.css"
import PropTypes from "prop-types"

const Textdesc = ({ className, children }) => {
  return (
    <div className={className}>
      <span>{children}</span>
    </div>
  )
}

const Textdescparagraph = ({ className, children }) => {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  )
}

Textdesc.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
Textdescparagraph.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export { Textdesc, Textdescparagraph }
