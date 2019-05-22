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
            fluid(maxHeight: 220, maxWidth: 350) {
              ...GatsbyContentfulFluid_tracedSVG
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
          }
        `}
      />
      <div className="projects">
        <h2
          className="break"
          css={css`
            animation: ${SlideLeft} 600ms ease-out 1 normal both,
              ${Visible} 600ms ease-out 1 normal both;
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
