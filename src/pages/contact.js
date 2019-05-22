import React from "react"
import Layout from "../components/layout"
import { Global, css, keyframes } from "@emotion/core"

const SlideRight = keyframes`
0%{
  transform:translateX(500px)
}
100%{
  transform:translateX(0)
 
}
`
const Visible = keyframes`
0%{
  opacity:0.1
}
100%{

  opacity:1;
}`

const SlideLeft = keyframes`
0%{
  transform:translateX(-400px)
}
100%{
  transform:translateX(0)
}`
export default () => (
  <Layout>
    <Global
      styles={css`
        .call {
          color: white;
          font-size: 74px;
        }
        .info {
          margin-left: 25%;
          h2 {
            font-size: 42px;
            padding-bottom: 1rem;
          }
          p {
            font-size: 24px;
            padding-top: 1rem;
          }
        }
      `}
    />
    <h1
      className="call"
      css={css`
        animation: ${SlideLeft} 500ms ease-out 1 normal both,
          ${Visible} 500ms ease-out 1 normal both;
      `}
    >
      Let's do
      <br />
      something
      <br /> amazing
    </h1>
    <section
      className="info"
      css={css`
        animation: ${SlideRight} 500ms ease-out 1 normal both,
          ${Visible} 500ms ease-out 1 normal both;
      `}
    >
      <h2>Phone No:</h2>
      <p>+91-9774588642</p>
      <h2>Email:</h2>
      <p>Sunnyoranup@gmail.com</p>
    </section>
  </Layout>
)
