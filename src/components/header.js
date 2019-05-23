import React from "react"

import { Global, css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <>
    <Global
      styles={css`
        header {
          display: fixed;
          position: fixed;
          width: 100%;
          z-index: 3;
          top: 0;
          background-color: #4a4a4a;
          nav {
            padding: 0.4rem 4%;
          }
          a {
            display: inline-block;
            padding: 1rem;
            color: white;
            text-decoration: none;
            font-size: 0.8rem;
            &:hover {
              cursor: pointer;
              color: #86c8f7;
            }
          }
          @media only screen and (min-width: 768px) {
            a {
              font-size: 16px;
              padding: 1rem;
              &:nth-of-type(1) {
                padding-left: 0;
              }
            }
            nav {
              padding: 0.4rem 7.8%;
            }
          }
        }
      `}
    />

    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  </>
)

export default Header
