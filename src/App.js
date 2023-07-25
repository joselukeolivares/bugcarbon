import React from 'react'
import { StackedBarChart } from '@carbon/charts-react'
import '@carbon/styles/css/styles.css' // may affect global styles
import '@carbon/charts-react/styles.css'

function App() {
  const [stackedBarData, setStackedBarData] = React.useState([
    { group: "Qty", value: 65000 },
  { group: "More", value: 29123 },
  { group: "Sold", value: 35213 },
  { group: "Restocking Restocking Restocking Restocking", value: 51213 },
  { group: "Misc", value: 16932 }
  ])

  const [stackedBarOptions, setStackedBarOptions] = React.useState({
  title: "Simple bar (discrete)",
  axes: {
    left: {
      mapsTo: "value"
    },
    bottom: {
      mapsTo: "group",
      scaleType: "labels"
    }
  }
})

  return (
    <div className="App">
      <StackedBarChart data={stackedBarData} options={stackedBarOptions} />
    </div>
  )
}



export default App;
