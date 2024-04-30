import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"

const FloorPlan = (props) => {
  return ( 
    <div>
      {props.name}
      <Kitchen />
      <LivingRoom />
      <Bedroom name='Bedroom' bedNum={1} />
    </div>
  )
}

export default FloorPlan