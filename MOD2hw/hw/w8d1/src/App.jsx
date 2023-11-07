import { useState } from 'react'
import './App.css'

import Sidebar from './components/sidebar'
import Reviews from './components/reviews'
import AverageRating from './components/averageRating'
import SentimentAnalysis from './components/sentimentAnalysis'
import WebsiteVisitors from './components/websiteVisitors'

import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'container'>
      <Sidebar/>
      <Reviews reviewAmount = "1281"/>
      <AverageRating rating = "4.6"/>
      <SentimentAnalysis/>
      <WebsiteVisitors visitorAmount = "821"/>
    </div>
  )
}

export default App