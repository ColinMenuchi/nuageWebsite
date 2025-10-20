import TopMenu from './TopMenu.jsx'
import Header from './Header.jsx'
import Subheader from './Subheader.jsx'
import Card from './Card.jsx'

function Home() {

  return (
    <>
      <Header></Header>
      <Subheader></Subheader>
      <Card imagePath='./src/assets/calendar.jpeg' title="Upcoming Events" text="Discover Our Events!"></Card>
      <Card imagePath='./src/assets/boardGameCollection.jpeg' title="Board Games" text="Explore Our Collection!"></Card>
      <Card imagePath='./src/assets/lightbulb.jpeg' title="Leadership & eBoard" text="Meet Our Leaders!"></Card>
    </>
  )
}

export default Home
