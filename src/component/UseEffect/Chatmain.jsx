import React, { useState } from 'react'
import Chat from './Chat'

const Chatmain = () => {
    const [roomId, setRoomId] = useState('general')
    const [show ,setShow] = useState(false)
  return (
    <>
        <label>
            choose the chat room {''}
            <select 
            value = {roomId}
            onchange={e => setRoomId(e.target.value)}>
                <option value='genral'>general</option>
                <option value='traval'>travel</option>
                <option value='music'>music</option>
            </select>
        </label>
        <button onClick = {()=>setShow(!show)}>
           { show ?'close chat':'open chat'}
        </button>
        {show && <hr/>}
        {show && <Chat roomId = {roomId}/>}
    </>
  )
}

export default Chatmain