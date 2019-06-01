import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProjectItem from "../components/projectItem"
import Layout from "../components/layout"
import { Global, css, keyframes } from "@emotion/core"
import Fade from "react-reveal/Fade"

const query = graphql`
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

const projects = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <Global
            styles={css`
              .break {
                color: white;
                padding: 4%;
                font-size: 24px;
                font-weight: bold;
                color: #333;
              }
              @media only screen and (min-width: 768px) {
                .break {
                  padding: 4% 8%;
                  text-align: center;
                }
                #projects {
                  height: 100vh;
                }
              }
            `}
          />
          <div id="projects">
            <Fade left delay={300} distance="100px">
              <h2
                className="break"
                css={css`
                  animation: ${SlideLeft} 600ms ease-out 1 normal both,
                    ${Visible} 600ms ease-out 1 normal both;
                `}
              >
                PROJECTS:
              </h2>
            </Fade>
            <Fade bottom delay={250}>
              <ProjectItem items={data.project.edges} />
            </Fade>
          </div>
        </Layout>
      )}
    />
  )
}

export default projects
