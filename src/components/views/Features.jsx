import { css } from "@emotion/react";

import config from "../../data/data";

const featuresStyle = css`
  .container {
    @media screen and (min-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .text {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-align: left;
    @media screen and (min-width: 600px) {
      width: 58%;
      font-size: 2.4rem;
    }
  }

  .img {
    margin-top: 24px;
    @media screen and (min-width: 600px) {
      width: 38%;
      margin-top: 0;
    }
  }
`;

export default function Features() {
  const { id, text, img } = config.features ? config.features : "Loading";

  return (
    <section id={id} className="section" css={featuresStyle}>
      <div className="container">
        <p className="text">{text}</p>
        <figure className="img">
          <img src={img} alt="" />
        </figure>
      </div>
    </section>
  );
}
