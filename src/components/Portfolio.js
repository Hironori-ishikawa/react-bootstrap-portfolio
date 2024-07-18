import React from 'react'
import ReactMemoAppImage from "../Images/portfolio/ReactCashMemoAppImage.png";
import NextJsTechBlogImage from "../Images/portfolio/nextjs-tech-blog.png";

export const Portfolio = () => {
  return (
    <div>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="PortfolioTitle">Portfolio</h2>
          </div>
          <div class="PortfolioItemBox">

            <div class="PortfolioItems">
              <h3 class="MemoAppTitle">
                買い物メモアプリ
              </h3>
              <p className='MemoAppTitle-p'>CashMemoApp</p>
              <div className='ReactMemoAppImageBox'>
                <a href='https://react-memo-app-chi.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={ReactMemoAppImage} alt='reactメモアプリ' className="ReactMemoAppImage" /></a>
              </div>
              <div class="MemoAppText">
                買い物メモアプリです。 タイトルと金額を入力しメモとして使用できるアプリです。合計個数、合計金額の表示と個数の変動が簡単にできます。<br />
                ポイントは、シンプルな見た目と操作で簡単に使用できます。<br />
                注力した点は、個数の変動をできるようにし、合計金額と合計個数も連動して表示しているところです。<br /><br />
                <p>
                  開発言語:React<br />
                  制作時間:3週間<br />
                  作成時期:2024/5/1〜5月末
                </p>
              </div>
            </div>

            <div class="PortfolioItems">
              <h3 className='TechBlogTitle'>テックブログ</h3>
              <p className='TechBlogTitle-p'>TechBlog</p>
              <div className='NextJsTechBlogImageBox'>
                <a href='https://nextjs-blog-app-one-gamma.vercel.app/' target="_blank" rel="noopener noreferrer">
                  <img src={NextJsTechBlogImage} alt='NextJsTechBlog' className="NextJsTechBlogImage" />
                </a>
              </div>
              <div class="TechBlogText">
                テックブログです。
                画像+テキスト投稿機能とコメント機能、いいね機能を実装しております。主に学習記録として活用中です。<br />
                苦労した点は、基本的なブログの投稿機能に加え、SNSらしさを出した買ったので、いいね機能を追加実装した点です。<br />
                <br />
                <p>
                  開発言語:Next.js<br />
                  制作時間:2ヶ月<br />
                  作成時期:2024/3/1〜4月末
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
