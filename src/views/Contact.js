import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import Form from '../components/form/Form'
import FormInput from '../components/form/FormInput'

export const Contact = ({ config }) => {
  const { id, title, text } = config.contact ? config.contact : 'Loading'

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id={id} className="section" css={contactStyle}>
      <div className="container">
        <h3 className="section_title">{title}</h3>
        <p className="text">{text}</p>
        <form onSubmit={handleSubmit}>
          <Form
            formInitialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            }}
          >
            <div className="fluid">
              <FormInput label="First Name" name="firstName" />
              <FormInput label="Last Name" name="lastName" />
            </div>
            <FormInput label="E-mail" type="email" name="email" />
            <FormInput label="Message" type="textarea" name="message" />
            <div className="btn_submit">
              <button type="submit">Send Message</button>
            </div>
          </Form>
        </form>
      </div>
    </section>
  )
}

const contactStyle = css`
  .section_title {
    text-align: left;
  }

  .container {
    max-width: 1024px;
  }

  .text {
    margin: 20px 0 32px;
    font-size: 1.4rem;
    letter-spacing: 0.05em;
    text-align: left;
    @media screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .fluid {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 48%;
    }
  }

  .btn_submit {
    display: flex;
    button {
      display: block;
      min-width: 240px;
      margin: 20px 0 0;
      padding: 16px 8px;
      color: #fff;
      background-color: #000;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-decoration: none;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
      @media screen and (min-width: 900px) {
        font-size: 1.6rem;
      }
    }
  }
`
