import styled from 'styled-components'

export const SearchArea = styled.div`
  background-color: #6e0ad6;
  padding: 20px 0px;

  .searchBox {
    padding: 20px 15px;
    border-radius: 5px;
    display: flex;

    form {
      display: flex;
      flex: 1;
      input,
      select {
        height: 50px;
        border: 0;
        border-radius: 10px;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
        outline: none;
      }

      input {
        flex: 1;
        padding: 18px 20px;
      }

      select {
        width: 100px;
      }

      button {
        background-color: #49aeef;
        font-size: 15px;
        border: 0;
        border-radius: 10px;
        color: #fff;
        height: 50px;
        padding: 0px 20px;
        cursor: pointer;
      }
    }
  }
  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 0px 15px;

    .categoryItem {
      width: 20%;
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;
    }

    img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
  }

  @media (max-width: 800px) {
    .searchBox {
      padding: 20px 0;
    }
    .searchBox form {
      flex-direction: column;

      input {
        margin-right: 0;
        margin-bottom: 10px;
      }

      select {
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .categoryList {
      padding: 0;
    }

    .categoryList .categoryItem {
      width: 50%;
    }
  }
`

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;

    .adItem {
      width: 20%;
    }
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    .list .adItem {
      width: 100%;
    }
    h2 {
      text-align: center;
    }
  }
`
