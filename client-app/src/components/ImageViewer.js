import React from "react";
import placeholder from '../images/placeholder.jpg'

const photos = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder
];

const ImageViewer = () => {
    return (
        <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={photos[0]} alt="photo" width="400px" height="200px"/>
                <img src={photos[1]} alt="photo" width="400px" height="200px"/>
                <img src={photos[2]} alt="photo" width="400px" height="200px"/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '70px' }}>
                <img src={photos[3]} alt="photo" width="400px" height="200px"/>
                <img src={photos[4]} alt="photo" width="400px" height="200px"/>
                <img src={photos[5]} alt="photo" width="400px" height="200px"/>
            </div>
        </div>
    );
};

export default ImageViewer;