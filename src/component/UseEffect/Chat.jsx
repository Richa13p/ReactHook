import React, { useState ,useEffect } from 'react'
import { createConnection } from './Server.js';

const Chat = ({roomId}) => {
    const [server, setServer] = useState("https://localhost:1234")
    useEffect (()=>{
        const connection = createConnection(server, roomId);
        connection.connect();
        return ()=>{
            connection.disconnect()
        }
    },[roomId, server])
  return (
    <div>
        <labal>
            server Url :{''}
            <input 
                value = {server}
                onChange={e => setServer(e.target.value)}
            />
        </labal>
        <h1> welcome to the {roomId } room</h1>
    </div>
  )
}

export default Chat