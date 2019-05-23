import React from "react"
import { Global, css, keyframes } from "@emotion/core"
export default () => {
  return (
    <div className="contact" id="contact">
      <Global
        styles={css`
          .contact {
            padding-top: 60px;
            height: 100vh;
            background: #222933;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            position: relative;

            input[type="text"] {
              display: block;
              margin: 0 auto;
              width: 350px;
              margin-bottom: 4px;
              font-size: 14px;
              color: #333;
            }
            button {
              display: block;
              margin-top: 10px;
              height: 35px;
              width: 100px;
              font-size: 14px;
              background: none;
              color: white;
              border-radius: 5px;
              &:hover {
                cursor: pointer;
                background: #86c8f7;
                transition: background 150ms ease-out 50ms;
              }
            }

            textarea {
              height: 150px;
              margin: 0 auto;
              width: 350px;
              display: block;
              font-size: 14px;
              color: #333;
            }

            p {
              color: #00c2c7;
              margin-bottom: 30px;
            }
            @media only screen and (min-width: 768px) {
              textarea,
              input[type="text"] {
                width: 400px;
              }
            }
          }
          footer {
            position: absolute;
            bottom: 0;
            background-color: #16242e;
            align-self: stretch;
            width: 100%;

            h3 {
              color: white;
              font-weight: 300;
              text-align: center;
            }
          }
          .bar {
            background: white;
            width: 68px;
            height: 4px;
          }
          h1 {
            color: white;
            margin-bottom: 10px;
          }
        `}
      />
      <h1>Contact</h1>
      <div className="bar" />
      <p>Have a question or want to work together?</p>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Submit</button>
      </form>
      <footer>
        <h3>Email:anup.dev96@gmail.com</h3>
        <h3>Phone:+91-9774588642</h3>
      </footer>
    </div>
  )
}
