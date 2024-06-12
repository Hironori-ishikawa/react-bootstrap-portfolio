import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3><a href='/'>ポートフォリオ</a></h3>
      </div>

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
    </header>
  )
}
