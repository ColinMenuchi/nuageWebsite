import TopMenu from './TopMenu.jsx'
import Header from './Header.jsx'
import Subheader from './Subheader.jsx'
import Card from './Card.jsx'

import calendar from '../assets/calendar.jpeg'
import boardGameCollection from '../assets/boardGameCollection.jpeg'
import lightbulb from '../assets/lightbulb.jpeg'

function Home() {

  return (
    <>
      <Header></Header>
      <Subheader></Subheader>
      <Card image={calendar} title="Upcoming Events" text="Discover Our Events!"></Card>
      <Card image={boardGameCollection} title="Board Games" text="Explore Our Collection!"></Card>
      <Card image={lightbulb} title="Leadership & eBoard" text="Meet Our Leaders!"></Card>
    </>
  )
}

export default Home
