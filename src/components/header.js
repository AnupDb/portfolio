import { Link } from "gatsby"
import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const MainTitle = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 26px;
  display: inline-block;
`

const Header = ({ siteTitle }) => (
  <>
    <Global
      styles={css`
        header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid white;
        }

        a {
          color: white;
          text-decoration: none;
        }

        .navigation {
          display: flex;
          align-items: center;
          width: 30%;
          justify-content: space-evenly;
        }
      `}
    />
    <header>
      <MainTitle>{siteTitle}</MainTitle>
      <div className="navigation">
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </header>
  </>
)

export default Header
