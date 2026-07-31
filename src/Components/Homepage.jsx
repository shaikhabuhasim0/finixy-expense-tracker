import React, { useState } from 'react'

export default function Homepage(props) {
    const [greetname , setgreetname]= useState("User")

  return (<>
    <div><h3>{props.homepage}</h3></div>
    <div className='usergreetings'> Good Morning </div>
    </>
  )
}
