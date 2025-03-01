//! Phase 2: Write appropriate code to solve the red errors in phase 1. This method is called Test driven development. 

interface FarewellProps {
    name?: string
}

const Farewell = (props: FarewellProps) => {
  return (
    <div>Bye {props.name}</div> 
  )
}

export default Farewell