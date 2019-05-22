import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`

const Image = ({ items }) => {
  return (
    <Wrapper>
      {items ? (
        items.map(item => (
          <Img
            css={css`
              margin-top: 1rem;
            `}
            fixed={item.node.childImageSharp.fixed}
          />
        ))
      ) : (
        <h4>Loading...</h4>
      )}
    </Wrapper>
  )
}

export default Image
