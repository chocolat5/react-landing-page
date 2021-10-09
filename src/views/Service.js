import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Service = ({ config }) => {
  const { id, title, text, service } = config.service
    ? config.service
    : 'Loading'

  return (
    <section id={id} className="section" css={serviceStyle}>
      <div className="container">
        <h3 className="section_title">{title}</h3>
        <p className="text">{text}</p>
        <ul className="list">{service && <Item items={service} />}</ul>
      </div>
    </section>
  )
}

const Item = ({ items }) => {
  const listItem = items.map((item, i) => (
    <li key={item.name} className="list_item">
      <p className="list_title">{item.name}</p>
      <p className="list_text">{item.text}</p>
      <figure className="list_img">
        <img src={item.img} alt="" />
      </figure>
    </li>
  ))
  return listItem
}

const serviceStyle = css`
  .container {
    @media screen and (min-width: 600px) {
    }
  }

  .text {
    margin-top: 20px;
    font-size: 1.4rem;
    letter-spacing: 0.05em;
    text-align: center;
    @media screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .list {
    margin-top: 40px;
    .list_item {
      padding: 24px;
      background-color: #fafafa;
    }
    .list_title {
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      text-align: center;
    }
    .list_text {
      margin-top: 16px;
      font-size: 1.3rem;
      line-height: 1.6;
      letter-spacing: 0.02em;
      text-align: center;
    }
    .list_img {
      position: relative;
      width: 100%;
      height: 0;
      margin: 24px 0 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media screen and (max-width: 600px) {
      .list_item {
        & + .list_item {
          margin-top: 32px;
        }
      }
    }
    @media screen and (min-width: 600px) {
      display: flex;
      justify-content: space-between;
      .list_item {
        width: calc((100% - 80px) / 3);
      }
    }
  }
`
