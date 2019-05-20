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
        .title-1 {
          font-size: 110px;
          margin-top: 10%;
        }
        .title-2 {
          font-size: 62px;
        }

        .center {
          font-size: 24px;
          color: #666;
          text-align: center;
        }
        .highlight {
          color: #fcf786;
          font-size: 26px;
        }

        .cta {
          height: 60vh;
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
