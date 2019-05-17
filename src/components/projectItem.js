import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Background = styled.div`
  background-color: white;
  overflow: hidden;

  height: 280px;
  padding-top: 25px;
  padding-left: 8%;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
`
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
`
const ProjectItem = ({ items }) => {
  console.log(items)

  return (
    <>
      {items.map(item => (
        <Background>
          <div>
            <a href={item.node.url} target="_blank">
              <Img
                className="project"
                fixed={item.node.image.fixed}
                style={{ float: "left", marginRight: "60px" }}
              />
            </a>
          </div>
          <div className="smallLine">
            <h3 className="sameLine">{item.node.title}</h3>
            <h4 className="color" style={{ fontSize: "18px" }}>
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
          <p className="smallLine description">{item.node.description}</p>
        </Background>
      ))}
    </>
  )
}

export default ProjectItem
