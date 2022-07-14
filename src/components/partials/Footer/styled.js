import styled from 'styled-components'

export const FooterArea = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-top: 1px solid rgb(234, 234, 234);
  margin-top: 30px;

  a {
    display: block;
    margin-left: 5px;
    text-decoration: none;
    color: #6e0ad6;

    &:hover {
      text-decoration: underline;
    }
  }
`
