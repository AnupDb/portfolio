import React from "react"
import { Global, css, keyframes } from "@emotion/core"
import code from "../images/code.png"
import test from "../images/analyze.png"
import efficient from "../images/efficient.png"
import brain from "../images/brain.png"
import me from "../images/songwriter.png"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import front from "../images/front.png"
import database from "../images/database.png"
import backend from "../images/backend.png"

export default () => {
  return (
    <>
      <Global
        styles={css`
          .about-section {
            display: block;
            height: 100%;
            padding-top: 3%;
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
              margin-bottom: 5%;
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
            padding-left: 4%;
            width: 100%;
            display: flex;
            flex-flow: row no-wrap;
            justify-content: center;
            align-items: center;
            img {
              height: 200px;
              width: 200px;
            }
            p {
              flex-basis: 50%;
            }
          }
          .skills {
            margin-top: 40px;
            position: relative;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            padding: 4%;
            background: rgb(142, 197, 252); /* Old browsers */
            background: -moz-linear-gradient(
              45deg,
              rgba(142, 197, 252, 1) 1%,
              rgba(224, 195, 252, 1) 83%
            ); /* FF3.6-15 */
            background: -webkit-linear-gradient(
              45deg,
              rgba(142, 197, 252, 1) 1%,
              rgba(224, 195, 252, 1) 83%
            ); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(
              45deg,
              rgba(142, 197, 252, 1) 1%,
              rgba(224, 195, 252, 1) 83%
            ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            &:after {
              position: absolute;
              width: 100%;
              height: 100%;
              content: "";
              background: inherit;
              z-index: -1;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transform-origin: top right;
              transform: skewY(-4deg);
            }
            ul {
              display: inline-block;
              background: #d9d9d9;
              width: 240px;
              height: 280px;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              li {
                list-style: none;
                padding: 5px;
                text-align: center;
              }
            }
          }
          @media only screen and (min-width: 768px) {
            .about-section {
              h1 {
                animation: ${Fade} 2000ms ease-out 1 normal both;
              }
            }
          }
          .info-section {
            margin-top: 5%;
          }
          .maincontainer {
            width: 240px;
            height: 280px;
            position: relative;
            margin: 4px;
          }
          .thecard {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            transform-style: preserve-3d;
            transition: all 0.5s ease;
          }
          .thecard:hover {
            transform: rotateY(180deg);
          }
          .thefront {
            font-size: 18px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-color: white;
            color: #333;

            img {
              width: 70px;
            }
          }
          .theback {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;

            color: #333;
            transform: rotateY(180deg);
          }
        `}
      />
      <section className="about-section" id="about">
        <div className="move">
          <section className="about-header">
            <Fade left delay={300} distance="100px">
              <h1>About</h1>
            </Fade>
            <Fade left delay={300} distance="100px">
              <div className="about-border" />
            </Fade>
          </section>
          <section className="badges">
            <div className="badge-holder">
              <Zoom>
                <div className="badge">
                  <img src={code} alt="clean code" />
                </div>
              </Zoom>
              <h3>Clean</h3>
              <p>Code that is easy to read and maintain is my first priority</p>
            </div>
            <div className="badge-holder">
              <Zoom>
                <div className="badge">
                  <img src={test} alt="testable" />
                </div>
              </Zoom>
              <h3>Testable</h3>
              <p>
                Code which can be tested independently with best TDD development
                practices
              </p>
            </div>
            <div className="badge-holder">
              <Zoom>
                <div className="badge">
                  <img src={efficient} alt="efficient" />
                </div>
              </Zoom>
              <h3>Efficient</h3>
              <p>
                Optimised content management and improved web performance for
                highly efficient websites
              </p>
            </div>
            <div className="badge-holder">
              <Zoom>
                <div className="badge">
                  <img src={brain} alt="intuitive brain" />
                </div>
              </Zoom>
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
                I am a JavaScript and Python addict with a love for UI/UX driven
                solutions. I enjoy finding beautiful solutions to complex coding
                problems.
                <br /> When I’m not coding or studying design, you’ll find me
                playing instruments, looking at art or reading Dostoevsky{" "}
              </p>
            </div>
            <div className="skills">
              <div className="maincontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img src={front} alt="" />
                    <p>Front End Skills:</p>
                  </div>
                  <div className="theback">
                    <ul>
                      <li>HTML</li>
                      <li>CSS/SASS</li>
                      <li>JavaScript</li>
                      <li>React/Redux</li>
                      <li>Gatsby</li>
                      <li>Angular</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="maincontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img src={backend} alt="" />
                    <p>Back End Skills:</p>
                  </div>
                  <div className="theback">
                    <ul>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Python</li>
                      <li>GraphQL</li>
                      <li>Flask</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="maincontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img src={database} alt="" />
                    <p>Database Skills:</p>
                  </div>
                  <div className="theback">
                    <ul>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
