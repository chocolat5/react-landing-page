import { css } from "@emotion/react";

import config from "../../data/data";

const caseStyle = css`
  .section_title {
    text-align: left;
  }

  .case_item {
    margin-top: 40px;
    .case_name {
      margin: 16px 0 0;
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 0.05em;
    }
    .case_text {
      margin: 12px 0 0;
      font-size: 1.4rem;
      line-height: 1.8;
      letter-spacing: 0.02em;
    }
    .case_img {
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
    }
    @media screen and (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .container {
        grid-column: 1 / -1;
        grid-row: 1;
        align-self: center;
        z-index: 2;
      }
      .case_name {
        width: 45%;
        font-size: 4.5rem;
      }
      .case_text {
        width: 45%;
        font-size: 2rem;
      }
      .case_img {
        grid-column: 2 / -1;
        grid-row: 1;
        z-index: 1;
      }
    }
  }
`;

export default function Case() {
  const { id, title, name, text, img } = config.case ? config.case : "Loading";

  return (
    <section id={id} className="section" css={caseStyle}>
      <div className="container">
        <h3 className="section_title">{title}</h3>
      </div>
      <div className="case_item">
        <div className="container">
          <p className="case_name">{name}</p>
          <p className="case_text">{text}</p>
        </div>
        <figure className="case_img">
          <img src={img} alt="" />
        </figure>
      </div>
    </section>
  );
}
