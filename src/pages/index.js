import React from "react"
import { Global, css, keyframes } from "@emotion/core"

import Layout from "../components/layout"

import SEO from "../components/seo"

const Fade = keyframes`
from{
  opacity:0.2;
}to{
  opacity:1;
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <Global
      styles={css`
        .title-1,
        .title-2 {
          text-align: center;
          color: white;
          margin: 0;
        }
        @media only screen and (min-width: 768px) {
          .title-1 {
            font-size: 11rem;
            .title-2 {
              font-size: 6.2rem;
            }
            .center {
              font-size: 1.6rem;
            }
            .highlight {
              font-size: 2.6rem;
            }
          }
        }
        .title-1 {
          font-size: 7rem;
        }
        .title-2 {
          font-size: 4rem;
        }

        .center {
          margin: 0.5rem 0 0 0;
          font-size: 1rem;
          color: #666;
          text-align: center;
        }
        .highlight {
          color: #fcf786;
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        .cta {
          height: 100vh;
          display: flex;
          flex-flow: column;
          justify-content: center;
        }
      `}
    />
    <SEO title="AnupDev" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className="cta"
      css={css`
        animation: ${Fade} 300ms;
      `}
    >
      <h1 className="title-1">Hello</h1>
      <h2 className="title-2">I'm Anup</h2>
      <p className="highlight center">I'm a creative web developer</p>
      <p className="center">
        A Javascript ethusiast and
        <br />
        a beginner UI/UX <br />
        Designer
      </p>
    </div>
  </Layout>
)

export default IndexPage
