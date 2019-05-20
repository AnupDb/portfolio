import React from "react"
import { graphql } from "gatsby"
import ProjectItem from "../components/projectItem"
import Layout from "../components/layout"
import { Global, css, keyframes } from "@emotion/core"

export const query = graphql`
  {
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
          url
          codeurl
        }
      }
    }
  }
`
const SlideLeft = keyframes`
0%{
  transform:translateX(-400px)
}
100%{
  transform:translateX(0)
}
`

const projects = ({ data }) => {
  return (
    <Layout>
      <Global
        styles={css`
          .break {
            color: white;
            font-size: 39px;
            font-weight: normal;
          }
          .projects {
            margin: 0 auto;
          }
        `}
      />
      <div className="projects">
        <h2
          className="break"
          css={css`
            animation: ${SlideLeft} 600ms ease-out 1 normal both;
          `}
        >
          PROJECTS:
        </h2>
        <ProjectItem items={data.project.edges} />
      </div>
    </Layout>
  )
}

projects.propTypes = {}

export default projects
