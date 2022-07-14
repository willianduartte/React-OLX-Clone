import styled from 'styled-components'

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 80%;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 80px;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1 {
      color: #6e0ad6;
    }
    .logo-2 {
      color: #8ce563;
    }
    .logo-3 {
      color: #f28000;
    }
  }
  nav {
    padding-block: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      height: 60px;
    }
    li {
      margin-inline: 20px;

      a,
      button {
        border: 0;
        background: none;
        cursor: pointer;
        color: #000;
        font-size: 14px;
        outline: 0;

        &:hover {
          color: #9027b0;
        }

        &.button {
          width: 120px;
          height: 40px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          background-color: rgb(247, 131, 35);
          color: #fff;
          border-radius: 30px;
          line-height: 21px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`
