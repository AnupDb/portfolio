import React from "react"
import { Global, css, keyframes } from "@emotion/core"
export default () => {
  return (
    <>
      <Global
        styles={css`
          .about-section {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            padding-top: 0;
            height:100vh;
          }
          .about {
            text-align: center;
            font-size: 32px;
          }
          .bottom {
            width: 68px;
            height: 4px;
            background-color: black;
            margin 0 auto;
            margin-top: 10px;
         
          }
          .description{
              padding:4%;
          }
          ul{
              padding:0;
              text-align:center;
              li{
                list-style:none;
              }
              &:nth-of-type(1){
                  margin-top:0;
              }
          }
           @media only screen and (min-width: 768px){
               .about-section{
                   align-items:stretch;
               }
           .user{
               margin-left:4%;
               margin-right:4%;
               margin-top:170px;
               display:flex;
               .description{
                   margin:0 ;
                   padding:0;
                   flex-basis:50%;
                   padding-left:4%;
                   p{
                       width:70%;
                       min-width:300px;
                       font-size:1.6rem;
                       margin-top:0;
                   }
               }
               .skills{
                   display:flex;
                   padding-left:12%;
                   flex-basis:40%;
                   justify-content:space-between;
                   ul{
                       margin:0;
                       li{
                           padding-bottom:1rem;
                       }
                   }
               }
           }
           }
        `}
      />
      <section className="about-section" id="about">
        <div className="about-title">
          <div className="about">ABOUT</div>
          <div className="bottom" />
        </div>

        <div className="user">
          <div className="description">
            <p>
              I’m a web developer with an eye for design. I have a serious
              passion for writing testable, scalable code while building fast
              and intuitive websites with dynamic user experiences
            </p>
          </div>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React/Redux</li>
            </ul>
            <ul>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Angular</li>
              <li>Gatsby</li>
            </ul>
            <ul>
              <li>GraphQL</li>
              <li>UI Design</li>
              <li>Adobe XD</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
