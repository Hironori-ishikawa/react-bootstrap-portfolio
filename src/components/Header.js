import React from 'react'
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

export const Header = () => {


  return (
    <header>
      <div className="logo">
        <h1><a href='/'>H.I PortfolioSite</a></h1>
        <div className='menu'>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href='https://nextjs-blog-app-one-gamma.vercel.app/' target="_blank" rel="noopener noreferrer">Blog
                </a>
              </li>
              {/* <li>
                <Link to="/sns">Sns</Link>
              </li> */}
            </ul>
          </nav>
          <div className='FaGithubIcon'>
            <a href='https://github.com/Hironori-ishikawa/react-bootstrap-portfolio' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>



    </header>
  )
}
