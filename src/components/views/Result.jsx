import { css } from "@emotion/react";

import config from "../../data/data";

const resultStyle = css`
  .text {
    margin-top: 24px;
    font-size: 1.5rem;
    line-height: 1.8;
    letter-spacing: 0.02em;
    @media screen and (min-width: 600px) {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 40px auto 0;
    .list_item {
      flex: 1 0 auto;
      width: 33.333%;
      text-align: center;
    }
    .inner {
      display: inline-block;
      text-align: left;
    }
    .list_num {
      font-size: 2.8rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 1.1;
    }
    .list_unit {
      margin-top: 8px;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.1;
      letter-spacing: 0.05em;
    }
    @media screen and (min-width: 600px) {
      .list_item {
        & + .list_item {
          border-left: 1px solid #ddd;
        }
      }
      .list_num {
        font-size: 4.8rem;
      }
      .list_unit {
        font-size: 1.8rem;
      }
    }
  }
`;

export default function Result() {
  const { id, title, text, items } = config.result ? config.result : "Loading";

  return (
    <section id={id} className="section" css={resultStyle}>
      <div className="container">
        <h3 className="section_title">{title}</h3>
        <p className="text">{text}</p>
        <ul className="list">{items && <Item items={items} />}</ul>
      </div>
    </section>
  );
}

const Item = ({ items }) => {
  const listItem = items.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={item + i} className="list_item">
      <div className="inner">
        <p className="list_num">{item.num}</p>
        <p className="list_unit">{item.unit}</p>
      </div>
    </li>
  ));
  return listItem;
};
