import styled from 'styled-components'

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .leftSide {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10px 0px;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      border: 2px solid #6e0ad6;
      border-radius: 5px;
      outline: none;
      font-size: 15px;
      color: #000;
      padding: 10px;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .categoryItem {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color: #000;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
      }
    }

    .categoryItem:hover,
    .categoryItem.active {
      background-color: #6e0ad6;
      color: #fff;
    }
  }
  .rightSide {
    flex: 1;

    h2 {
      margin-top: 0;
      font-size: 18px;
    }

    .listWarning {
      padding: 30px;
      text-align: center;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      .adItem {
        width: 33%;
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    .pagItem {
      width: 30px;
      height: 30px;
      border: 1px solid rgb(210 210 210);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin-right: 5px;
      cursor: pointer;

      &:hover {
        background-color: #e8f0f8;
      }

      &.active {
        background-color: #666655;
        color: #fff;
      }
    }
  }
`
