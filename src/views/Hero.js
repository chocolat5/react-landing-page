import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Hero = ({ config }) => {
  const { copy, text, img, cta, url } = config.hero ? config.hero : 'Loading'

  return (
    <div css={heroStyle}>
      <div className="container">
        <p className="copy">{copy}</p>
        <p className="text">{text}</p>
        {cta && (
          <a href={url} className="cta">
            {cta}
          </a>
        )}
      </div>
      <img src={img} alt="" className="bg" />
    </div>
  )
}

const heroStyle = css`
  display: grid;
  height: 400px;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    height: 100vh;
  }

  .container {
    grid-area: 1 / -1;
    margin: auto;
    z-index: 3;
  }

  .bg {
    grid-area: 1 / -1;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    content: '';
    background-color: #fff;
    opacity: 0.6;
    grid-area: 1 / -1;
    z-index: 2;
  }

  .copy {
    font-size: 3.2rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1.6;
    white-space: pre-line;
    @media screen and (min-width: 600px) {
      font-size: 5.6rem;
    }
  }

  .text {
    margin: 12px 0 0;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
    @media screen and (min-width: 600px) {
      max-width: 60%;
      font-size: 1.8rem;
    }
  }

  .cta {
    display: block;
    width: 100%;
    margin: 32px auto 0;
    padding: 8px;
    color: #fff;
    background-color: #000;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-align: center;
    &:hover {
      opacity: 0.7;
    }
    @media screen and (min-width: 900px) {
      max-width: 240px;
      margin-left: 0;
      margin-right: 0;
      font-size: 1.6rem;
    }
  }
`
