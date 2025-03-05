//! Phase 2: Write appropriate code to solve the red errors in phase 1. This method is called Test driven development. 

import { FarewellProps } from "./farewell.types"

const Farewell = (props: FarewellProps) => {
  return (
    <div>Bye {props.name ? props.name : 'Guest'}</div> 
  )
}

export default Farewell