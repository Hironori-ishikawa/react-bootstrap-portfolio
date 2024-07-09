import React from 'react'

import FrontEndChartImage from "../Images/Skill/FrontEnd-Chart.png"
import BackEndChartImage from "../Images/Skill/BackEnd-Chart.png"

export const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div class="SkillBox">
          <h2 class="SkillTitle">Skill</h2>
          <div>
            <p className='SkillText'>
              これまでのスキルをレーダーチャートで表しました。広く浅くになりますが、フロントエンドからバックエンドまで対応可能ですが全体的に専門的な知識の不足を認識しております。今後はフロントエンドをメインに専門知識のレベルアップを図っていきたいと思っております。<br />
              また上流工程にはなりますが、約1年間ほど要件的義や顧客折衝を担当した経験があり、自身のコミュニケーション力を武器に業務を円滑に進める自信があります。
            </p>
          </div>
          <div class="SkillInner">
            <div class="FrontEndChartImageBox">
              <img src={FrontEndChartImage} alt='FrontEndChartImage' className='FrontEndChartImage' />

            </div>
            <div class="BackEndChartImageBox">
              <img src={BackEndChartImage} alt='BackEndChartImage' className='BackEndChartImage' />
            </div>
          </div>
          <div>
            <p className='SKillChartText'>
              チャートの見方としては「1: 独学で触った程度」、「2: 研修など使用した経験がありもう少し習熟が必要」、「3: 自力で開発ができる」、「4: 自由に駆使できる」、「5: 実務レベルでる」。という感じです。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
