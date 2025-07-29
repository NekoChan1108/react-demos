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
        if (e.target.className === "search-div"&&e.target.className!=="search-input") {
            setInput(false)
            setBackgroundColor("white")
        }
    }
    return (
        <section className={"search-div"} onClick={onDivClick}>
            {
                input ? <input type={"text"} placeholder={"Search..."} className={"search-input"}/> :
                    <FaSearch onClick={onIconClick} color={"black"} className={"search-icon"}/>
            }
        </section>
    );
};

export default HiddenSearchBar;