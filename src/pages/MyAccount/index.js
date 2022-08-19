import AdItem from '../../components/partials/AdItem'
import { PageContainer, PageTitle } from '../../components/MainComponents'
import { UserArea, PageArea } from './styled'
import { Link } from 'react-router-dom'

import useApi from '../../helpers/OlxApi'
import { useEffect } from 'react'
import { useState } from 'react'

export const MyAccount = () => {
  const api = useApi()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(true)
  const [adList, setAdList] = useState([])

  useEffect(() => {
    const getUserInfo = async () => {
      const json = await api.userInfo()
      setName(json.name)
      setEmail(json.email)
      setState(json.state)
      setAdList(json.ads)
      setLoading(false)
    }
    getUserInfo()
  }, [])

  return (
    <PageContainer>
      <PageTitle>Minha conta</PageTitle>
      <UserArea>
        <div>
          <div className="userName">{name}</div>
          <div className="userEmail">{email}</div>
          <div className="userState">{state}</div>
        </div>
        <Link to="/editUser" className="edit">
          Editar conta
        </Link>
      </UserArea>
      <PageTitle>Meus anúncios</PageTitle>
      <PageArea>
        {loading && adList.length === 0 && (
          <div className="listWarning">Carregando...</div>
        )}
        {!loading && adList.length === 0 && (
          <div className="listWarning">
            Você não possui anúncios publicados.
          </div>
        )}
        <div className="list">
          {adList.map((i, index) => (
            <AdItem key={index} data={i._doc} />
          ))}
        </div>
      </PageArea>
    </PageContainer>
  )
}
