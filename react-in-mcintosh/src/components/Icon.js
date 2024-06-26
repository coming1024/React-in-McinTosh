import React, {useState} from 'react';
import '../styles/Icon.css';
import RubbishBin from "../assets/icons/rubbish-bin.svg";

const Icon = () => {
    const [position, setPosition] = useState({x:20,y:50});
    const [draggable, setDraggable] = useState(false);

    const onMouseDown = (e) => {
        setPosition({x: e.pageX, y: e.pageY});
        setDraggable(true);
    }

    const onMouseMove = (e) => {
        if(!draggable) {return;}
        setPosition({x: e.pageX, y: e.pageY});
    }

    const onMouseUp = (e) => {
        setDraggable(false);
    }

    const iconStyle = {
        left: position.x,
        top: position.y,
        position: "absolute",
    }

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            style={iconStyle}
        >
            <img src={RubbishBin} alt="File" className="draggable-icon" />
        </div>
    );
}

export default Icon;
