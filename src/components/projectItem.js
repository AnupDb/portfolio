import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Global, css, keyframes } from "@emotion/core"

const Li = styled.li`
  list-style: none;
  color: #333;
`

const A = styled.a`
  display: inline-block;
  border: 1px solid white;
  height: 30px;
  width: 100px;
  margin: auto;
  text-align: center;
  padding-top: 3px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  &:nth-of-type(2) {
    margin-left: 10px;
  }
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

const ProjectItem = ({ items }) => (
  <div className="container">
    <Global
      styles={css`
          .container{
            margin:4%;
          }
          .image-hold {
            position: relative;
            margin-bottom:10px;
            .technology {
              position: absolute;
              opacity:0;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(45, 124, 226, 0.8); /* Old browsers */
              background: -moz-linear-gradient(
                -45deg,
                rgba(45, 124, 226, 0.8) 0%,
                rgba(125, 185, 232, 0.8) 100%
              ); /* FF3.6-15 */
              background: -webkit-linear-gradient(
                -45deg,
                rgba(45, 124, 226, 0.8) 0%,
                rgba(125, 185, 232, 0.8) 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(
                135deg,
                rgba(45, 124, 226, 0.8) 0%,
                rgba(125, 185, 232, 0.8) 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              padding-left: 20px;
              h3 {
                font-size: 24px;
              }
              h4 {
                color: #333;
                margin-bottom: none;
              }
              &:hover {
                transition: opacity 350ms ease-out 50ms;
                opacity: 1;
              }
              ul {
                width: 100%;
                display: flex;
             flex-flow: row wrap;
              }
              li:not(:first-child) {
                margin-left: 1rem;
              }
            }
            .opaque:actvie{
               transition: "opacity 350ms ease-out 50ms",
                opacity: 1,
            }
          }
          @media only screen and (min-width: 768px){
            .image-hold{
              width:20%;
              display:inline-block;
              min-width:300px;
              margin:10px;
              margin-top:0;
              
            }
              .container{
        margin: 0 4% 4% 4%;
        display:flex;
        justify-content:center;;
      }
          }
        `}
    />

    {items.map((item, index) => (
      <div className="image-hold">
        <a href={item.node.url} target="_blank">
          <Img className="project" fluid={item.node.image.fluid} />
        </a>
        <div className="technology opaque">
          <h3>{item.node.title}</h3>
          <h4 className="color">Technologies Used:</h4>
          <ul className="none">
            <Li>{item.node.tech1}</Li>
            <Li>{item.node.tech2}</Li>
            <Li>{item.node.tech3}</Li>
            {item.node.tech4 ? <Li>{item.node.tech4}</Li> : null}
          </ul>

          <A className="projectLink" href={item.node.url} target="_blank">
            View Code
          </A>
          <A className="projectLink" href={item.node.url} target="_blank">
            Website
          </A>
        </div>
      </div>
    ))}
  </div>
)
export default ProjectItem
