import React, { useEffect } from "react"
import { Global, css, keyframes } from "@emotion/core"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import About from "../components/about"
import Project from "./projects"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Fade from "react-reveal/Fade"

const Floating = keyframes` 
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
    border-radius: 20%;
  }
  to {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 60%;
  }
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Global
        styles={css`
          .front {
            position: relative;
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
            z-index: 3;
            width: 100%;
            height: calc(100vh - 50px);
            background-color: rgba(0, 0, 0, 0.1);
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
            .arrow {
              transform: rotateZ(90deg);
            }
            @media only screen and (min-width: 768px) {
              .arrow {
                transform: rotateZ(0deg);
              }
              .cta {
                font-size: 2.2rem;
              }
            }
            .arrow-btn:hover .arrow {
              transition: transform 300ms ease-out;

              transform: rotateZ(90deg);
            }
            .arrow-btn:hover {
              background-color: #86c8f7;
              transition: background-color 300ms ease-out;
              cursor: pointer;
            }
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
          <Fade top cascade>
            <p className="cta">
              Hello I'm Anup DebBarma
              <br />
              I'm a creative web developer
            </p>
          </Fade>
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
