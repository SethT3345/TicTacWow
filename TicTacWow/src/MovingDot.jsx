import { useState } from "react";

export default function MovingDot(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const HandleMove = (ev) => {
        const rect = ev.currentTarget.getBoundingClientRect();
        setX(ev.clientX - rect.left);
        setY(ev.clientY - rect.top);
    }

    return(
        <div style={{
            position: "relative",
            width: "100vw",
            height: "100vh"
        }}
        onPointerMove={HandleMove}>

        <div style={{
            position: "absolute", 
            backgroundImage: "url('./images/Tralalero-Tralala-PNG-Transparent.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            left: x - 25, 
            top: y - 25, 
            width: 80,
            height: 80,
        }}>
        
        </div>
        </div>
    )
}