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
const Visible = keyframes`
0%{
  opacity:0.1
}
100%{

  opacity:1;
}`
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
      <div className="skill-con">
        <section
          className="skills"
          css={css`
            @media only screen and (min-width: 768px) {
              animation: ${Slide} 500ms ease-out 1 normal both,
                ${Visible} 500ms ease-out 1 normal both;
            }
          `}
        >
          <Global
            styles={css`
              .skills {
                height: 70%;
                margin-top: 1rem;
                background-color: white;

                padding: 1rem;
                padding-bottom: 1rem;
                width: 100%;
                box-shadow: 5px 5px 10px #888;

                h1 {
                  color: #86c8f7;
                  margin-top: 40px;
                  font-size: 36px;
                }
              }
              @media only screen and (min-width: 768px) {
                .skill-con {
                  display: flex;
                  align-items: center;

                  height: 100%;
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
      </div>
    </Layout>
  )
}

export default skill
