import {React, memo} from 'react'

function ChaildA() {
    console.log("childA component is called ..")
  return (
    <div>
      
    </div>
  )
}

export default memo(ChaildA); // wrapped childA by memo

// now we can seee in console that childA is now stopped re-rendering
// lets increase the problem in next app