import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterBox'>
        <div className='FooterNav'>
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
        </div>
        <div className='FooterName'>H.I Portfolio @H.R.I</div>

      </div>
    </div>
  )
}
