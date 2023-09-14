import React ,{useRef, useEffect} from 'react';
import { FadeAnimation } from './animation.js';

const Controllig = () => {
    const ref = useRef(null);
    useEffect(()=>{
        const animation = new FadeAnimation(ref.current);
        animation.start(1000);
        return()=>{
          animation.stop()  
        }
    }, []);

    
  return (
    <h1 ref = {ref}
    style={{
        opacity:0,
        color:'#fff',
        padding:50,
        textAlign:'center',
        fontSize:50,
        backgroundImage:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
    }}>
    WELCOME TO WORLD

    </h1>
  )
}

export default Controllig