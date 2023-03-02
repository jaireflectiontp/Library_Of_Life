import React from 'react'
import Tabs from './Tabs'
const Section3 = () => {

    const videoList=JSON.parse(localStorage.getItem('videos'))
    
    const videoTab = [
        {
            key: 'Mvids',
            Title: 'My Videos',
            Content: videoList
        },
        {
            key: 'Svids',
            Title: 'Shared Videos',
            Content:'nothing'
        }
    ]

  return (
    <div>
       <Tabs videoTab={videoTab} />
    </div>
  )
}

export default Section3
