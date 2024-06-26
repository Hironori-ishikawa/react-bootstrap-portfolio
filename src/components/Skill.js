import React from 'react'
import reactImage from "../Images/react.png";
import NextJsImage from "../Images/nextjsicon.jpeg";
import HtmlCssJsImage from "../Images/htmlcssjsiicon.png";
import PhpImage from "../Images/phpicon.jpeg"

export const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div class="text-center">
          <h2 class="SkillTitle">Skill</h2>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={NextJsImage} alt='NextJsアイコン' />
              <h3 className='SkillNextJs'>Next.js</h3>
              <p className='SkillNextJsText'>Next.js学習中です。</p>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} alt='reactアイコン' />
              <h3 className='SkillReact'>React</h3>
              <p className='SkillReactText'>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={HtmlCssJsImage} alt='HtmlCssJsアイコン' className='HtmlCssJsImage' />
              <h3 className='SkillHtmlCssJs'>HTML/CSS/JavaScript</h3>
              <p className='SkillHtmlCssJsText'>HTML/CSS/Jsがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={PhpImage} alt='Phpアイコン' />
              <h3 className='SkillPhp'>php / Laravel</h3>
              <p className='SkillPhpText'>Laravelがつかえます</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
