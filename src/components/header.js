import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faImage,
  faAddressBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <>
    <Global
      styles={css`
        header {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          position: fixed;
          height: 100vh;
          left: 0;
          top: 0;
          bottom: 0;
        }

        .passive {
          height: 50px;
          width: 100%;
          height: 50px;
          text-align: center;
          padding-top: 7px;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 40vh;
          width: 80px;
          justify-content: space-between;
        }
        @media only screen and (min-width: 768px) {
          .navigation {
            height: 30vh;
          }
        }
      `}
    />
    <header>
      <div className="navigation">
        <Link to="/" className="passive" activeClassName="active">
          <FontAwesomeIcon icon={faUser} size="2x" color="#86c8f7" />
        </Link>
        <Link to="/skill" activeClassName="active">
          <FontAwesomeIcon icon={faCode} size="2x" color="#86c8f7" />
        </Link>
        <Link to="/projects" activeClassName="active">
          <FontAwesomeIcon icon={faImage} size="2x" color="#86c8f7" />
        </Link>
        <Link to="/contact" activeClassName="active">
          <FontAwesomeIcon icon={faAddressBook} size="2x" color="#86c8f7" />
        </Link>
      </div>
    </header>
  </>
)

export default Header
