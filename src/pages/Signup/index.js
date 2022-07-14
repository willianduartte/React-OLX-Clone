import React, { useState, useEffect } from 'react'
import {
  PageContainer,
  PageTitle,
  ErrorMensage
} from '../../components/MainComponents'
import { PageArea } from './styled'
import { doLogin } from '../../helpers/AuthHandler'

import useApi from '../../helpers/OlxApi'

export const Signup = () => {
  const api = useApi()

  const [name, setName] = useState('')
  const [stateLoc, setStateLoc] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [stateList, setStateList] = useState([])

  const [disabled, setDisable] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates()
      setStateList(slist)
    }
    getStates()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setDisable(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Senhas não batem!')
      setDisable(false)
      return
    }
    const json = await api.register(name, email, password, stateLoc)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token)
      window.location.href = '/'
    }

    setDisable(false)
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMensage>{error}</ErrorMensage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                disabled={disabled}
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                value={stateLoc}
                onChange={e => setStateLoc(e.target.value)}
                required
              >
                <option></option>
                {stateList.map((i, index) => (
                  <option key={index} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
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
            <div className="area--title">Confirmar Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Cadastrar</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
