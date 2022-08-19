import styled from 'styled-components'

export const Item = styled.div`
  .disable {
    opacity: 0.5;
  }

  a {
    display: block;
    border: 1px solid #fff;
    background-color: #fff;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    transition: all ease 0.2s;

    &:hover {
      border: 1px solid #ccc;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }

    .itemName {
      font-weight: bold;
    }

    .itemInfo {
      display: flex;
      justify-content: space-between;
    }

    .itemPrice {
      font-size: 14px;
    }

    .edit {
      width: 80px;
      height: 40px;
      align-items: center;
      background-color: rgb(247, 131, 35);
      color: #fff;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 700;
      border-width: 1px;
      border-color: transparent;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 800px) {
    a {
      margin: 5px;
      .edit {
        width: 50px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
`
