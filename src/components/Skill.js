import React from 'react'
import reactImage from "../Images/react.png";
import NextjsImage from "../Images/nextjsicon.jpeg";
import HtmlCssJsImage from "../Images/htmlcssjsiicon.png";
import PhpImage from "../Images/phpicon.jpeg"

export const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div class="text-center">
          <h2 class="section-heading text-uppercase mb-5">Skill</h2>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={NextjsImage} alt='Nextjsアイコン' />
              <h4>Next.js</h4>
              <p>Next.js学習中です。</p>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} alt='reactアイコン' />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={HtmlCssJsImage} alt='HtmlCssJsアイコン' />
              <h4>HTML/CSS/JavaScript</h4>
              <p>HTML/CSS/Jsがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={PhpImage} alt='Phpアイコン' />
              <h4>php / Laravel</h4>
              <p>Laravelがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}
