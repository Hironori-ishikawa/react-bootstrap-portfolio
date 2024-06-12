import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";

export const Skill = () => {
  return (
    <div>
      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} alt='reactアイコン' />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} alt='jsアイコン' />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} alt='firebaseアイコン' />
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
