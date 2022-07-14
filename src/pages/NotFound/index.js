import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1>Página 404</h1>
      <p>Não encontramos essa página!</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  )
}
