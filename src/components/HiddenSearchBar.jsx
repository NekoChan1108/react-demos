import React, {useEffect, useState} from 'react';
import "../assets/HiddenSearchBarStyle.css"
import {FaSearch} from "react-icons/fa";

const HiddenSearchBar = () => {
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [input, setInput] = useState(false)
    useEffect(() => {
        document.body.style.background = backgroundColor
        return () => {
            document.body.style.background = ''
        }
    }, [backgroundColor]);
    const onIconClick = () => {
        setInput(true)
        setBackgroundColor("black")
    }
    const onDivClick = (e) => {
        console.log(e.target.className)
        if (e.target.className === "search-div") {
            setInput(false)
            setBackgroundColor("white")
        }
    }
    return (
        <div className={"search-div"} onClick={onDivClick}>
            {
                input ? <input type={"text"} placeholder={"Search..."}/> :
                    <FaSearch onClick={onIconClick} color={"black"}/>
            }
        </div>
    );
};

export default HiddenSearchBar;