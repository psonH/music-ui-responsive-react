import React from 'react'
import { Features } from './components/Features'
import { FooterBar } from './components/FooterBar'
import { Hero } from './components/Hero'
import { MusicLover } from './components/MusicLover'
import { Navigation } from './components/Navigation'
import { News } from './components/News'


const App = () => {
  return (
    <div>
        <Navigation />
        <Hero />
        <Features />
        <MusicLover />
        <News />
        <FooterBar />
    </div>
  )
}
export default App;