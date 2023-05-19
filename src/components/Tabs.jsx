import React from 'react'

const Tabs = (props) => {
const { allTabs, currentTab, setCurrentTab } = props

const tabStyle = (index) => {
  if (index === currentTab) {
    return 'selectedTab'
  } else {
    return 'nonSelectedTab'
  }
}

const setSelectedTab = (index) => {
  setCurrentTab(index)
}

// const [tabColor, setTabColor] = useState("")
// const [tabContent, setTabContent] = useState("")


  return (
    <div className='wrapper'>
      <div style= {{width: "600px", textAlign: "left"}}>
      {
        allTabs.map((item, index) => (
          <div className={`tab ${tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
            {item.label}
            </div>
        ))
      }
      {/* <div id='wrapper'> */}
        {/* <button className='tab' onClick= {(e) => setTabColor(e.target.value)}>Tab 1</button>
        <button className='tab' onClick= {(e) => setTabColor(e.target.value)}>Tab 2</button>
        <button className='tab' onClick= {(e) => setTabColor(e.target.value)}>Tab 3</button>
        <br />
        <div className='textBox'>
          <p className='textContent'>Tab content goes here...</p>
        </div> */}
      </div>
    </div>
  )
}

export default Tabs