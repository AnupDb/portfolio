import React from "react"
import { Global, css, keyframes } from "@emotion/core"
import code from "../images/code.png"
import test from "../images/analyze.png"
import efficient from "../images/efficient.png"
import brain from "../images/brain.png"
import me from "../images/songwriter.png"
export default () => {
  return (
    <>
      <Global
        styles={css`
          .about-section {
            height: 100vh;
            padding-top: 10px;
          }
          .about-header {
            h1 {
              text-align: center;
              font-size: 32px;
              color: #333;
            }
            .about-border {
              background: #333;
              height: 5px;
              width: 100px;
              margin: 0 auto;
              margin-bottom: 30px;
            }
          }
          .badges {
            display: flex;
            flex-flow: row wrap;

            .badge-holder {
              display: flex;
              flex-direction: column;
              flex-basis: 50%;
              p {
                margin: 0 auto;
                padding: 10px;
                text-align: center;
                font-size: 14px;
              }
              h3 {
                text-align: center;
                margin-top: 0;
                margin-bottom: 0;
                font-weight: 600;
                font-size: 18px;
              }
            }
            @media only screen and (min-width: 768px) {
              .badge-holder {
                flex-basis: 25%;
              }
            }
          }
          .badge {
            background: #86c8f7;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto;
            padding-top: 10px;
            img {
              width: 60px;
              height: 60px;
              display: block;
              margin: auto;
            }
          }
          .about-me {
            float: left;
            padding-left: 4%;
            width: 100%;
            img {
              height: 200px;
              width: 200px;
              display: block;
              margin: 0 auto;
            }
            p {
              width: 100%;
            }
          }
          .skills {
            float: left;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            ul {
              margin-top: 50px;
              display: inline-block;
              li {
                padding: 10px;
                list-style: none;
              }
            }
          }
          @media only screen and (min-width: 768px) {
            .about-me {
              width: 50%;
            }
            .skills {
              width: 50%;
            }
          }
        `}
      />
      <section className="about-section" id="about">
        <section className="about-header">
          <h1>About</h1>
          <div className="about-border" />
        </section>
        <section className="badges">
          <div className="badge-holder">
            <div className="badge">
              <img src={code} alt="clean code" />
            </div>
            <h3>Clean</h3>
            <p>Code that is easy to read and maintain is my first priority</p>
          </div>
          <div className="badge-holder">
            <div className="badge">
              <img src={test} alt="testable" />
            </div>
            <h3>Testable</h3>
            <p>
              Writing code which can be independently tested Instead of the
              write console log everywhere
            </p>
          </div>
          <div className="badge-holder">
            <div className="badge">
              <img src={efficient} alt="efficient" />
            </div>
            <h3>Efficient</h3>
            <p>
              Optimised content management and improved web performance for
              highly efficient websites
            </p>
          </div>
          <div className="badge-holder">
            <div className="badge">
              <img src={brain} alt="intuitive brain" />
            </div>
            <h3>Intuitive</h3>
            <p>
              Easy to use UI/UX oriented development for a a smooth user
              experience
            </p>
          </div>
        </section>
        <section className="info-section">
          <div className="about-me">
            <img src={me} alt="Anup's illustration" />
            <p>
              I am a JavaScript Developer with a deep passion for UI/UX driven
              solutions. I enjoy finding beautiful solutions to complex coding
              problems.
              <br /> When I’m not coding or studying design, you’ll find me
              playing instruments, looking at art or reading Dostoevsky{" "}
            </p>
          </div>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>JavaScript</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li>React/Redux</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </section>
      </section>
    </>
  )
}
