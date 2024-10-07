import {React, memo} from 'react'

function ChaildA() {
    console.log("childA component is called ..")
  return (
    <div>
      
    </div>
  )
}

export default memo(ChaildA); // 