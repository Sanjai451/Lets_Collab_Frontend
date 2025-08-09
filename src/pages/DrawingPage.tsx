import { Tldraw } from '@tldraw/tldraw';
import 'tldraw/tldraw.css'
import { useEffect, useState } from 'react';

const DrawingPage = () => {
    const [roomID, setRoomID] = useState<string | null>('')
     
    useEffect(()=>{
      const id = localStorage.getItem('roomID')
      setRoomID(id);
    },[])

  return (
    <div className="draw_component" style={{ width: "100%", height: "100%" }}>
    <Tldraw />
  </div>
  );
};

export default DrawingPage;
