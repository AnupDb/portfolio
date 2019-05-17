import React from "react"
import styled from "@emotion/styled"

const Foot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 40px;
`

const Footer = () => (
  <Foot>
    <h2>Contact</h2>
    <p>Email:sunnyoranup@gmail.com</p>
    <p>Phone:9774588642</p>
  </Foot>
)

export default Footer
