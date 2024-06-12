import React from 'react'

export const Portfolio = () => {
  return (
    <div>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase mb-5">PORTFOLIO</h2>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3"> <a href='https://react-memo-app-chi.vercel.app/' target="_blank" rel="noopener noreferrer">WEBアプリケーション</a></h4>

              <p class="text-muted">
                Reactによるメモアプリです。 タイトルと金額を入力しメモとして使用できるアプリです。合計個数、合計金額の表示と個数の変動が簡単にできます。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">サンプル</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
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
