import React from 'react'
import { Link } from 'react-router-dom'

function ButtonBackToHome() {
  return (
      <Link className="button is-info" to="/">Back to home</Link>
  )
}

export default ButtonBackToHome
