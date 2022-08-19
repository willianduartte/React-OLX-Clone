import React, { useState, useEffect } from 'react'
import { PageContainer } from '../../components/MainComponents'
import { SearchArea, PageArea } from './styled'
import { Link } from 'react-router-dom'
import AdItem from '../../components/partials/AdItem'

import useApi from '../../helpers/OlxApi'

export const Home = () => {
  const api = useApi()

  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates()
      setStateList(slist)
    }
    getStates()
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories()
      setCategories(cats)
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 10
      })
      setAdList(json.ads)
    }
    getRecentAds()
  }, [])

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input
                type="text"
                name="q"
                placeholder="Estou procurando por..."
              />
              <select name="state">
                <option></option>
                {stateList.map((i, index) => (
                  <option key={index} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, index) => (
              <Link
                key={index}
                to={`/ads?cat=${i.slug}`}
                className="categoryItem"
              >
                <img src={i.img} alt={i.name} />
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h2>Anúncios recentes</h2>
          <div className="list">
            {adList.map((i, index) => (
              <AdItem key={index} data={i} />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            Ver todos
          </Link>
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          elementum mi est, at tristique velit mollis non. Morbi tempus porta
          sapien ac varius. Duis varius tellus ut purus fermentum, ac fringilla
          ipsum tincidunt. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Integer et vulputate
          massa. Donec euismod tincidunt cursus.
        </PageArea>
      </PageContainer>
    </>
  )
}
