import TopMenu from './components/TopMenu.jsx'
import Header from './components/Header.jsx'
import Subheader from './components/Subheader.jsx'
import Card from './components/Card.jsx'

import calendar from './assets/calendar.jpeg'

function App() {

  return (
    <>
      <TopMenu></TopMenu>
      <Header></Header>
      <Subheader></Subheader>
      <Card image={calendar} title="Upcoming Events" text="Discover Our Events!"></Card>
    </>
  )
}

export default App
