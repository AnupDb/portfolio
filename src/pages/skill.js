import React from "react"
import Image from "../components/image"
import { graphql } from "gatsby"
import { Global, css, keyframes } from "@emotion/core"
import Layout from "../components/layout"

export const query = graphql`
  {
    front: allFile(filter: { relativeDirectory: { eq: "front" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 140) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }

    back: allFile(filter: { relativeDirectory: { eq: "back" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 140) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
const Slide = keyframes`
0%{
  transform:translateX(-400px)
}
100%{
  transform:translateX(0)
}
`
const skill = ({ data }) => {
  return (
    <Layout>
      <section
        className="skills"
        css={css`
          animation: ${Slide} 500ms ease-out 1 normal both;
        `}
      >
        <Global
          styles={css`
            .skills {
              background-color: white;
              margin: 0 auto;
              padding-left: 90px;
              padding-top: 10px;
              width: 100%;
              position: absolute;
              top: 14%;
              height: 680px;
              box-shadow: 5px 5px 10px #888;
              h1 {
                color: #86c8f7;
                margin-top: 40px;
                font-size: 36px;
              }
            }
          `}
        />
        <h1>Skills</h1>
        <h4 className="color" style={{ fontSize: "20px" }}>
          Front-End Skills:
        </h4>
        <Image items={data.front.edges} />
        <h4 className="color" style={{ fontSize: "20px" }}>
          Back-End Skills:
        </h4>
        <Image items={data.back.edges} />
      </section>
    </Layout>
  )
}

export default skill
