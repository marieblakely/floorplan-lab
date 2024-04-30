import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"


const FloorPlan = (props) => {
  return ( 
    <div>
      {props.name}
      {props.size}
      <Bedroom name='Bedroom' bedNum={1} />
      <Kitchen />
      <Bath size='Full'/>
      <Bedroom name='Bedroom' bedNum={2} />
      <LivingRoom />
      <Bath size='Half'/>
      <Bedroom name='Bedroom' bedNum={3} />
    </div>
  )
}

export default FloorPlan