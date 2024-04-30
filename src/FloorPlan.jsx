import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Oven from "./Oven"
import Sink from "./Sink"

const FloorPlan = (props) => {
  return ( 
    <div>
      {props.name}
      <Bedroom name='Bedroom' bedNum={1} />
      <Kitchen />
      <Oven />
      <Sink />
      <Bedroom name='Bedroom' bedNum={2} />
      <LivingRoom />
      <Bedroom name='Bedroom' bedNum={3} />
    </div>
  )
}

export default FloorPlan