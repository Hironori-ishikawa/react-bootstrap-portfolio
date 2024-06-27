import React from 'react'
import ReactMemoAppImage from "../Images/portfolio/react-memo-app.png";
import NextJsTechBlogImage from "../Images/portfolio/nextjs-tech-blog.png";

export const Portfolio = () => {
  return (
    <div>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="PortfolioTitle">Portfolio</h2>
          </div>
          <div class="row text-center">

            <div class="col-md-4">
              <h3 class="MemoAppTitle">
                買い物メモアプリ
              </h3>
              <p className='MemoAppTitle-p'>CashMemoApp</p>
              <div className='ReactMemoAppImageBox'>
                <a href='https://react-memo-app-chi.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={ReactMemoAppImage} alt='reactメモアプリ' className="ReactMemoAppImage" /></a>
              </div>
              <p class="MemoAppText">
                Reactによる買い物メモアプリです。 タイトルと金額を入力しメモとして使用できるアプリです。合計個数、合計金額の表示と個数の変動が簡単にできます。
              </p>
            </div>

            <div class="col-md-4">
              <h3 className='TechBlogTitle'>テックブログ</h3>
              <p className='TechBlogTitle-p'>TechBlog</p>
              <div className='NextJsTechBlogImageBox'>
                <a href='https://nextjs-blog-app-one-gamma.vercel.app/' target="_blank" rel="noopener noreferrer">
                  <img src={NextJsTechBlogImage} alt='NextJsTechBlog' className="NextJsTechBlogImage" />
                </a>
              </div>
              <p class="TechBlogText">
                Next.js によるブログです。
                画像+テキスト投稿機能とコメント機能、いいね機能を実装しております。主に学習記録として活用中です。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">サンプル</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
