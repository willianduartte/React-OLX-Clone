import React, { useState } from 'react'
import {
  PageContainer,
  PageTitle,
  ErrorMensage
} from '../../components/MainComponents'
import { PageArea } from './styled'
import { doLogin } from '../../helpers/AuthHandler'

import useApi from '../../helpers/OlxApi'

export const Signin = () => {
  const api = useApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [disabled, setDisable] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setDisable(true)
    setError('')

    const json = await api.login(email, password)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token, rememberPassword)
      window.location.href = '/'
    }

    setDisable(false)
  }

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMensage>{error}</ErrorMensage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--checkbox">
              <input
                id="toggle"
                className="toggle"
                type="checkbox"
                disabled={disabled}
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
              <label for="toggle"></label>
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
