import React, { useEffect } from "react"
import { Global, css, keyframes } from "@emotion/core"
import back from "../images/background.jpg"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import About from "../components/about"
import Project from "./projects"
import SEO from "../components/seo"
import Contact from "../components/contact"

const Fade = keyframes`
from{
  opacity:0.2;
}to{
  opacity:1;
}
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Global
        styles={css`
          .back {
            z-index: -1;
            height: 100vh;
            background: url(${back}) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
          .front {
            z-index: 1;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .arrow-btn {
              color: white;

              border: 1px solid white;
              border-radius: 5px;
              padding: 0.5rem;
              a {
                text-decoration: none;
                color: white;
                margin-right: 0.4rem;
              }
              
              }
              .arrow{
                transform:rotateZ(90deg)
              }
              @media only screen and (min-width: 768px){
                  .arrow{
                transform:rotateZ(0deg)
              }
              .cta{
                font-size:2.2rem;
              }
              }
              .arrow-btn:hover .arrow{
                transition:transform 300ms ease-out;

                transform:rotateZ(90deg)
              }
               .arrow-btn:hover {
                 background-color:#86c8f7;
                 transition: background-color 300ms ease-out;
                cursor:pointer;

              }
              
            }
          }
          .cta {
            color: white;
            text-align: center;
            font-size: 1.4rem;
          }
        `}
      />
      <SEO title="AnupDev" keywords={[`gatsby`, `application`, `react`]} />
      <div className="back" id="home">
        <div className="front">
          <p className="cta">
            Hello I'm Anup DebBarma
            <br />
            I'm a creative web developer
          </p>
          <div className="arrow-btn">
            <a href="#about">Hire me</a>
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
    </Layout>
  )
}
export default IndexPage
