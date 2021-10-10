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
  height: 600px;
  overflow: hidden;

  .container {
    grid-area: 1 / -1;
    text-align: center;
    margin: auto;
    z-index: 3;
  }

  .bg {
    grid-area: 1 / -1;
    z-index: 1;
    width: 100%;
    height: 600px;
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
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 1.1;
    @media screen and (min-width: 600px) {
      font-size: 5.6rem;
    }
  }

  .text {
    margin: 0 auto;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
    @media screen and (min-width: 600px) {
      max-width: 60%;
      font-size: 1.8rem;
    }
  }

  .cta {
    display: block;
    max-width: 240px;
    margin: 20px auto 0;
    padding: 8px;
    color: #fff;
    background-color: #000;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
    @media screen and (min-width: 900px) {
      font-size: 1.6rem;
    }
  }
`
