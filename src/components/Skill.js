import React from 'react'
import PersonalSkillChartImage from "../Images/Skill/PersonalSkillChart.png"

export const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div class="SkillBox">
          <h2 class="SkillTitle">Skill</h2>
          <div>
            <p className='SkillText'>
              広く浅くになりますが、フロントエンドからバックエンドまで幅広く経験があり、数十桁のシンプルな実装であれば対応可能です。<br />
              現在はReactやNext.jsを学習しておりまして、特にフロントエンド分野の専門知識のスキルアップを図っていきたいです。<br />フルスタックエンジニアを目指しているため、バックエンド分野のスキルアップも繋げていきたいです。<br />
              また上流工程にはなりますが、約1年間ほど要件定義や顧客折衝を担当した経験があります。<br />自身のコミュニケーション力を武器に業務を円滑に進める自信があります。
            </p>
          </div>
          <div class="SkillInner">
            <div class="PersonalSkillChartImageBox">
              <img src={PersonalSkillChartImage} alt='PersonalSkillChartImage' className='PersonalSkillChartImage' />
            </div>

            <div className='skill-bar-box'>
              <div class="skill-bar">
                <p>HTML/CSS</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>JavaScript</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>jQuery</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>React</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>Next.Js</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>Php</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>Laravel</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>Java</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>

              <div class="skill-bar">
                <p>MySQL</p>
                <div class="dots">
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot green"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            </div>

          </div>




        </div>
      </section>
    </div>
  )
}
