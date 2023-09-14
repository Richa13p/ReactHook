import React, { useEffect, useState } from 'react'


const ListingGlobal = () => {
    const[position , setPosition] = useState({x:0, y:0})
    useEffect(()=>{
        function handleMove(e){

            // what is meaning for e.client event
            
            setPosition({x:e.clientX, y: e.clientY})
        }
        window.addEventListener('pointermove', handleMove);
           return()=>{
            window.removeEventListener('pointermove',handleMove)
           }
    },[]);
  return (
    <div style={{
        position:"absolute",
        background:"pink",
        borderRadius:"50%",
        opacity:0.6,
        transform:'translate(${position.x}px , ${position.p}px)',
        pointerEvents:'none',
        left: 20,
        top: 20,
        width:80,
        height:80,
        textAlign:"center",
    }}>
   hii
    </div>
  )
}

export default ListingGlobal