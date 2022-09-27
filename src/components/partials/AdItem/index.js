import React from 'react'
import { Item } from './styled'
import { Link } from 'react-router-dom'

const AdItem = props => {
  let price = ''

  if (props.data.priceNegotiable) {
    price = 'Preço Negociável'
  } else {
    price = `R$ ${props.data.price}`
  }

  return (
    <Item className="adItem">
      {props.data.id && (
        <Link to={`/ad/${props.data.id}`}>
          <div className="itemImage">
            <img src={props.data.image} alt="Erro ao carregar a imagem" />
          </div>
          <div className="itemName">{props.data.title}</div>
          <div className="itemPrice">{price}</div>
        </Link>
      )}
      {props.data.status === 'false' && props.data._id && (
        <Link className="disable" to={`/editAd/${props.data._id}`}>
          <div className="itemImage">
            {props.data.images && (
              <img
                src={`${props.data.images[0].awsUrl}`}
                alt="Erro ao carregar a imagem"
              />
            )}
          </div>
          <div className="itemInfo">
            <div>
              <div className="itemName">Anúncio inativo</div>
              <div className="itemPrice"></div>
            </div>
            <div>
              <Link to={`/editAd/${props.data._id}`} className="edit">
                Editar
              </Link>
            </div>
          </div>
        </Link>
      )}
      {props.data.status === 'true' && props.data._id && (
        <Link to={`/ad/${props.data._id}`}>
          <div className="itemImage">
            {props.data.images && (
              <img
                src={`${props.data.images[0].awsUrl}`}
                alt="Erro ao carregar a imagem"
              />
            )}
          </div>
          <div className="itemInfo">
            <div>
              <div className="itemName">{props.data.title}</div>
              <div className="itemPrice">{price}</div>
            </div>
            <div>
              <Link to={`/editAd/${props.data._id}`} className="edit">
                Editar
              </Link>
            </div>
          </div>
        </Link>
      )}
    </Item>
  )
}

export default AdItem
