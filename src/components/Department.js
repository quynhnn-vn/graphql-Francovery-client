import React from 'react';
import { useParams } from "react-router";

export default function Department() {
    const { id } = useParams();
    return (
        <div style={{
            width: "500px",
            height: "500px",
        }}>
            <iframe
                width="100%"
                height="100%"
                title="map"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src={`https://www.google.com/maps/embed/v1/place?q=${id}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
            />
            
        </div>
    )
}
