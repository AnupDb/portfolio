import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Image = ({ items }) => {
  return (
    <Wrapper>
      {items ? (
        items.map(item => <Img fixed={item.node.childImageSharp.fixed} />)
      ) : (
        <h4>Loading...</h4>
      )}
    </Wrapper>
  )
}

export default Image
