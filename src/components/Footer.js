import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className='FooterBox'>
        <div className='FooterNav'>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/sns">Sns</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='FooterName'>H.I Portfolio @H.R.I</div>

      </div>
    </div>
  )
}
