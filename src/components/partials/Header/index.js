import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'
import { isLogged, doLogout } from '../../../helpers/AuthHandler'

const Header = () => {
  let logged = isLogged()

  const logout = () => {
    doLogout()
    window.location.href = '/'
  }

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 40 40"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#6E0AD6"
                  d="M7.579 26.294c-2.282 0-3.855-1.89-3.855-4.683 0-2.82 1.573-4.709 3.855-4.709 2.28 0 3.855 1.889 3.855 4.682 0 2.82-1.574 4.71-3.855 4.71m0 3.538c4.222 0 7.578-3.512 7.578-8.248 0-4.682-3.173-8.22-7.578-8.22C3.357 13.363 0 16.874 0 21.61c0 4.763 3.173 8.221 7.579 8.221"
                ></path>
                <path
                  fill="#8CE563"
                  d="M18.278 23.553h7.237c.499 0 .787-.292.787-.798V20.44c0-.505-.288-.798-.787-.798h-4.851V9.798c0-.505-.288-.798-.787-.798h-2.386c-.498 0-.787.293-.787.798v12.159c0 1.038.551 1.596 1.574 1.596"
                ></path>
                <path
                  fill="#F28000"
                  d="M28.112 29.593l4.353-5.082 4.222 5.082c.367.452.839.452 1.258.08l1.705-1.517c.42-.373.472-.851.079-1.277l-4.694-5.321 4.274-4.869c.367-.426.34-.878-.078-1.277l-1.6-1.463c-.42-.4-.892-.373-1.259.08l-3.907 4.602-3.986-4.603c-.367-.425-.84-.479-1.259-.08l-1.652 1.49c-.42.4-.446.825-.053 1.278l4.354 4.868-4.747 5.348c-.393.452-.34.905.079 1.277l1.652 1.464c.42.372.891.345 1.259-.08"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={logout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                    Anunciar
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin" className="button">
                    Anunciar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header
