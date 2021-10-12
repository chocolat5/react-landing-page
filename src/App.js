import React, { useEffect, useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './views/Hero'
import { Features } from './views/Features'
import { About } from './views/About'
import { Service } from './views/Service'
import { Case } from './views/Case'
import { Result } from './views/Result'
import { Testimonials } from './views/Testimonials'
import { Contact } from './views/Contact'
import { config } from './data/data'

const App = () => {
  const [siteData, setSiteData] = useState({})
  useEffect(() => {
    setSiteData(config)
  }, [])

  return (
    <div className="app">
      <Header config={siteData} />
      <main css={mainStyle}>
        <Hero config={siteData} />
        <Features config={siteData} />
        <About config={siteData} />
        <Service config={siteData} />
        <Case config={siteData} />
        <Result config={siteData} />
        <Testimonials config={siteData} />
        <Contact config={siteData} />
      </main>
      <Footer config={siteData} />
    </div>
  )
}

const mainStyle = css`
  margin-top: 64px;
`

export default App
