import styled from 'styled-components'

export const UserArea = styled.div`
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;

  .userName {
    font-size: 24px;
  }
  .userEmail {
    color: #888;
    font-size: 14px;
    margin-block: 5px;
  }
  .userState {
    color: #999;
    font-size: 14px;
  }
  .edit {
    width: 120px;
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

  @media (max-width: 800px) {
    padding: 5px;

    .userName {
      font-size: 15px;
    }
    .userEmail {
      font-size: 12px;
    }
  }
`

export const PageArea = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;

    .adItem {
      width: 25%;
    }
  }
  @media (max-width: 800px) {
    .list {
      .adItem {
        width: 50%;
      }
    }
  }
`
