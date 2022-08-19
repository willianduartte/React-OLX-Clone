import styled from 'styled-components'

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 10px;
        font-size: 14px;
        font-weight: bold;
      }
      .area--input {
        flex: 1;

        input,
        select,
        textarea {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: none;
          transition: all ease 0.3s;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }
      }

      textarea {
        height: 150px;
        resize: none;
      }

      .area--checkbox {
        margin-top: 5px;
      }
      button {
        background-color: #f99d53;
        border: 0;
        outline: none;
        padding: 5px 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
    .toggle {
      display: none;
    }
    .toggle + label {
      width: 40px;
      height: 25px;
      background: lightgrey;
      display: block;
      position: relative;
      border-radius: 20px;
      padding: 2px;
      transition: 200ms;
      cursor: pointer;
    }
    .toggle + label:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: white;
      display: block;
      border-radius: 50%;
      right: unset;
      left: 2px;
      top: 2px;
      transition: 200ms;
    }

    .toggle:checked + label {
      background: #4dd964;
    }

    .toggle:checked + label:before {
      content: '';
      left: calc(100% - 22px);
      box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
    }
  }

  @media (max-width: 800px) {
    form {
      .area {
        flex-direction: column;

        .area--title {
          width: 100%;
          text-align: left;
          margin-bottom: 10px;
        }
        .area--input {
          width: 100%;

          button {
            width: 100%;
            padding: 10px;
          }
        }
        .area--checkbox {
          width: 100%;
        }
      }
    }
  }
`
