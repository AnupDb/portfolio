import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectItem from "../components/projectItem"

export const query = graphql`
  {
    allFile {
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

    project: allContentfulPortfolio {
      edges {
        node {
          image {
            fixed(height: 220, width: 350) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          title
          tech1
          tech2
          tech3
          tech4
          description
        }
      }
    }
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
        .skills {
          background-color: white;

          margin: 0 auto;
          margin-top: 60px;
          padding-left: 90px;
          padding-top: 10px;
          margin-bottom: 44px;
          height: 680px;
          h1 {
            color: #86c8f7;
            margin-top: 40px;
            font-size: 36px;
          }
        }
        .cta {
          height: 60vh;
        }
        .break {
          color: white;
          font-size: 39px;
          font-weight: normal;
        }
      `}
    />
    <SEO title="AnupDev" keywords={[`gatsby`, `application`, `react`]} />
    <div className="cta">
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
    <section className="skills">
      <h1>Skills</h1>
      <h4 className="color" style={{ fontSize: "20px" }}>
        Front-End Skills:
      </h4>
      <Image items={data.allFile.edges} start={0} stop={6} />
      <h4 className="color" style={{ fontSize: "20px" }}>
        Back-End Skills:
      </h4>
      <Image items={data.allFile.edges} start={7} stop={10} />
    </section>

    <h2 className="break">PROJECTS:</h2>
    <ProjectItem items={data.project.edges} />
  </Layout>
)

export default IndexPage
