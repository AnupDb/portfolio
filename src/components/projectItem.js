import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Global, css, keyframes } from "@emotion/core"

const Li = styled.li`
  list-style: none;
  color: #666;
`

const A = styled.a`
  display: inline-block;
  border: 1px solid #86c8f7;
  height: 30px;
  width: 100px;
  margin: auto;
  text-align: center;
  padding-top: 3px;
  border-radius: 20px;
  text-decoration: none;
`
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

const ProjectItem = ({ items }) => {
  return (
    <>
      <Global
        styles={css`
          ul {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
          }
          li:not(:first-child) {
            margin-left: 1rem;
          }
          @media only screen and (min-width: 768px) {
            .image-hold {
              flex-basis: 33.3%;
              flex-grow: 1;
            }
            .description {
              flex-basis: 50%;
              margin: 0px;
              margin-left: 4%;
              padding: 3rem;
            }
            .technologies {
              h3 {
                margin: 0px;
              }
              margin-left: 4%;
            }
            ul {
              display: block;
            }
            li:not(:first-child) {
              margin-left: 0rem;
            }
          }
        `}
      />
      {items.map((item, index) => (
        <div
          className="container"
          key={index}
          css={css`
            background-color: white;
            padding: 1rem;
            display: flex;
            width: 100%;
            flex-flow: column nowrap;

            margin-top: 1rem;

            @media only screen and (min-width: 768px) {
              animation: ${SlideRight} 600ms ease-out 1 normal both,
                ${Visible} 600ms ease-out 1 normal both;
              flex-flow: row nowrap;
            }
          `}
        >
          <div className="image-hold">
            <a href={item.node.url} target="_blank">
              <Img className="project" fluid={item.node.image.fluid} />
            </a>
          </div>

          <div className="technologies">
            <h3>{item.node.title}</h3>
            <h4
              className="color"
              style={{ fontSize: "18px", marginBottom: "5px" }}
            >
              Technologies Used:
            </h4>
            <ul className="none">
              <Li>{item.node.tech1}</Li>
              <Li>{item.node.tech2}</Li>
              <Li>{item.node.tech3}</Li>
              {item.node.tech4 ? <Li>{item.node.tech4}</Li> : null}
            </ul>

            <A className="projectLink" href={item.node.codeurl} target="_blank">
              View Code
            </A>
          </div>
          <p className="description">{item.node.description}</p>
        </div>
      ))}
    </>
  )
}

export default ProjectItem
