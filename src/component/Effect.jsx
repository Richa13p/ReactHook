//Effect Hooks

import React, { useEffect } from 'react'
//Effects let a component connect to and
// synchronize with external systems. 
//This includes dealing with network, browser DOM, 
//animations, widgets written using a 
//different UI library, and other non-React code.
//
//
//

const Effect = () => {
    useEffect(()=>{
        const connection = createConnection(roomId);
        connection.connect();
        return ()=> connection.disconnect()
    },[roomId])
  return (
    <div></div>
  )
}

export default Effect