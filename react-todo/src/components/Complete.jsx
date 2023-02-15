import React from 'react'

const Complete = ({completed}) => {
    // console.log("Completed", completed);
  return (
    <div>
      
   {/* {completed.map((item,index)=>{
    return(
  <div key={index}>
  {item}
  </div>
    )
   })
  
   } */}

   {completed.id}
    </div>
  )
}

export default Complete