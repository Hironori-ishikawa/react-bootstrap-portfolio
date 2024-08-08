import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {


  return (
    <header>
      <div className="logo">
        <div className='menu'>
          <h1><a href='/'>H.I PortfolioSite</a></h1>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href='https://nextjs-blog-app-one-gamma.vercel.app/' target="_blank" rel="noopener noreferrer">Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
