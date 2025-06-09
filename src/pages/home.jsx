import React from 'react'
import Hero from '../components/hero'
import Latestcollection from '../components/latestcollection'
import BestSeller from '../components/BestSeller'
import Features from '../components/features'

const home = () => {
  return (
    <div>
    <Hero/>
    <Latestcollection/>
    <BestSeller/>
  <Features/>
    </div>
  )
}

export default home
