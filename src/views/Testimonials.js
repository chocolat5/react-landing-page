import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Testimonials = ({ config }) => {
  const { id, title, items, text } = config.testimonials
    ? config.testimonials
    : 'Loading'

  return (
    <section id={id} className="section" css={testimonialsStyle}>
      <div className="container">
        <h3 className="section_title">{title}</h3>
        <ul className="list">{items && <Item items={items} />}</ul>
      </div>
    </section>
  )
}

const Item = ({ items }) => {
  const listItem = items.map((item, i) => (
    <li key={item + i} className="list_item">
      <figure className="list_thumb">
        <img src={item.img} alt={item.name} />
      </figure>
      <p className="list_text">{item.text}</p>
      <p className="list_title">{item.name}</p>
    </li>
  ))
  return listItem
}

const testimonialsStyle = css`
  .list {
    margin-top: 40px;
    .list_item {
      padding: 24px;
      background-color: #fff;
    }
    .list_title {
      margin-top: 20px;
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.05em;
    }
    .list_text {
      margin-top: 16px;
      font-size: 1.5rem;
      line-height: 1.7;
      letter-spacing: 0.02em;
    }
    .list_thumb {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
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
