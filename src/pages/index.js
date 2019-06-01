import React, { useEffect } from "react"
import { Global, css, keyframes } from "@emotion/core"
import back from "../images/landing.jpg"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import About from "../components/about"
import Project from "./projects"
import SEO from "../components/seo"
import Contact from "../components/contact"

const Fade = keyframes`
from{
  opacity:0.2;
}to{
  opacity:1;
}
`

const Floating = keyframes` 
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
    border-radius: 20%;
  }
  to {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 60%;
  }
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Global
        styles={css`
          .back {
            z-index: -1;
            position:relative;
            height: 100vh;
        background: rgb(142,197,252); /* Old browsers */
        background: -moz-linear-gradient(45deg, rgba(142,197,252,1) 1%, rgba(224,195,252,1) 83%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, rgba(142,197,252,1) 1%,rgba(224,195,252,1) 83%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, rgba(142,197,252,1) 1%,rgba(224,195,252,1) 83%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          }
          .front {
            z-index: 1;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .arrow-btn {
              color: white;

              border: 1px solid white;
              border-radius: 5px;
              padding: 0.5rem;
              a {
                text-decoration: none;
                color: white;
                margin-right: 0.4rem;
              }
              
              }
              .arrow{
                transform:rotateZ(90deg)
              }
              @media only screen and (min-width: 768px){
                  .arrow{
                transform:rotateZ(0deg)
              }
              .cta{
                font-size:2.2rem;
              }
              }
              .arrow-btn:hover .arrow{
                transition:transform 300ms ease-out;

                transform:rotateZ(90deg)
              }
               .arrow-btn:hover {
                 background-color:#86c8f7;
                 transition: background-color 300ms ease-out;
                cursor:pointer;

              }
              
            }
          }
          .cta {
            color: white;
            text-align: center;
            font-size: 1.4rem;
          }
          .circles-container{
            width:100%;
            height:100vh;
            position:absolute;
            overflow:hidden;
            .circle {
                  position: absolute;
                  display: block;
                  list-style: none;
                  width: 20px;
                  height: 20px;
                  background-color: rgba(255, 255, 255, 0.5);
                  bottom: -100px;
                  animation: ${Floating} 12s linear infinite;
                  
                  &:nth-child(1){
                    left:10%;
                    width:30px;
                    height:30px;
                    animation-delay:3000ms;
                  }&:nth-child(2){
                    left:30%;
                    width:30px;
                    height:30px;
                    animation-delay:1000ms;
                  }
                 
                 &:nth-child(3){
                    left:60%;
                    width:30px;
                    height:30px;
                    animation-delay:2000ms;
                  }
                   &:nth-child(4){
                    left:90%;
                    width:30px;
                    height:30px;
                    animation-delay:4000ms;
                  }
                  &:nth-child(5){
                    left:50%;
                    width:30px;
                    height:30px;
                    animation-delay:5000ms;
                  }

                  @media only screen and (min-width: 768px){
                  
                    &:nth-child(1){
                    width:70px;
                    height:70px;
                    left:15%;
                    animation-delay:1000ms;
                  }
                     &:nth-child(2){
                    width:60px;
                    height:60px;
                    left:24%;
                    animation-delay:3000ms;
                  }
                         &:nth-child(3){
                    width:60px;
                    height:60px;
                    left:38%;
                    animation-delay:6000ms;
                  }      &:nth-child(4){
                    width:60px;
                    height:60px;
                    left:55%;
                    animation-delay:5000ms;
                  }
                  &:nth-child(5){
                    width:80px;
                    height:80px;
                    left:70%;
                    animation-delay:100ms;
                  }&:nth-child(6){
                    width:44px;
                    height:44px;
                    left:77%;
                    animation-delay:3000ms;
                  }&:nth-child(7){
                    width:44px;
                    height:44px;
                    left:90%;
                    animation-delay:2000ms;
                  }&:nth-child(8){
                    width:55px;
                    height:55px;
                    left:10%;
                    animation-delay:4000ms;
                  }
                      &:nth-child(9){
                    width:80px;
                    height:80px;
                    left:70%;
                    animation-delay:100ms;
                }
                }
            
          }
        `}
      />
      <SEO title="AnupDev" keywords={[`gatsby`, `application`, `react`]} />

      <div className="back" id="home">
        <div className="animation">
          <ul className="circles-container">
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
            <li className="circle" />
          </ul>
        </div>
        <div className="front">
          <p className="cta">
            Hello I'm Anup DebBarma
            <br />
            I'm a creative web developer
          </p>
          <div className="arrow-btn">
            <a href="#about">Hire me</a>
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
    </Layout>
  )
}
export default IndexPage
