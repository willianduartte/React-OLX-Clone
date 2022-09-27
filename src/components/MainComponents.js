import styled from 'styled-components'

export const Template = styled.div``

export const PageContainer = styled.div`
  max-width: 80%;
  margin: auto;

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 10px;
  }
`

export const PageTitle = styled.h1`
  font-size: 27px;
`

export const PageBody = styled.div``

export const ErrorMensage = styled.div`
  margin: 10px 0px;
  background-color: #ffcaca;
  color: #000;
  border: 2px solid red;
  padding: 10px;
`
