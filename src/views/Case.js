import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Case = ({ config }) => {
  const { id, title, items } = config.case ? config.case : 'Loading'

  return (
    <section id={id} className="section" css={caseStyle}>
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
      <a href="#">
        <p className="list_title">{item.name}</p>
        <figure className="list_img">
          <img src={item.img} alt="" />
        </figure>
      </a>
    </li>
  ))
  return listItem
}

const caseStyle = css`
  .list {
    margin-top: 40px;
    .list_item {
      a {
        display: grid;
        color: #222;
        text-decoration: none;
        &:after {
          content: '';
          background-color: rgba(0, 112, 200, 0.7);
          opacity: 0.3;
          grid-area: 1 / -1;
          z-index: 2;
          opacity: 0;
          transition: all 0.4s;
        }
        &:hover {
          cursor: pointer;
          &:after {
            opacity: 1;
          }
          .list_title {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
    .list_title {
      grid-area: 1 / -1;
      text-align: center;
      margin: auto;
      z-index: 3;
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      text-align: center;
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.3s;
    }
    .list_img {
      grid-area: 1 / -1;
      z-index: 1;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 66.666%;
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
      flex-wrap: wrap;
      justify-content: space-between;
      .list_item {
        width: 33.333%;
      }
    }
  }
`
