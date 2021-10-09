import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const About = ({ config }) => {
  const { id, title, text, img, titleSub, why1, why2 } = config.about
    ? config.about
    : 'Loading'

  return (
    <section id={id} className="section" css={aboutStyle}>
      <div className="container">
        <div className="content">
          <h3 className="section_title">{title}</h3>
          <p className="text">{text}</p>
          <h4 className="title_sub">{titleSub}</h4>
          <div className="list_wrap">
            <ul className="list">{why1 && <Why items={why1} />}</ul>
            <ul className="list">{why2 && <Why items={why2} />}</ul>
          </div>
        </div>
        <figure className="img">
          <img src={img} alt="" />
        </figure>
      </div>
    </section>
  )
}

const Why = ({ items }) => {
  const list = items.map((item, i) => (
    <li key={item + i} className="item">
      {item}
    </li>
  ))
  return list
}

const aboutStyle = css`
  .container {
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  .section_title {
    text-align: left;
  }

  .content {
    @media screen and (min-width: 600px) {
      width: 48%;
    }
  }

  .title_sub {
    margin: 20px 0 12px;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  .text {
    margin-top: 20px;
    font-size: 1.4rem;
    letter-spacing: 0.05em;
    text-align: left;
    @media screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .img {
    margin-top: 24px;
    @media screen and (min-width: 600px) {
      width: 48%;
      margin-top: 0;
    }
  }

  .list_wrap {
    .item {
      position: relative;
      padding-left: 1.5em;
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0.5em;
        left: 0;
        width: 10px;
        height: 6px;
        border-left: 2px solid #9c9c9c;
        border-bottom: 2px solid #9c9c9c;
        transform: rotate(-45deg);
      }
    }
    @media screen and (min-width: 600px) {
      display: flex;
      justify-content: space-between;
      .list {
        width: 48%;
      }
    }
  }
`
