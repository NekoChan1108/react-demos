import React, {useState} from 'react';
import "../assets/AccordionStyle.css"

const Accordion = ({title, content}) => {
    console.log(title, content);
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={"accordion-card"} onClick={()=>setIsActive(!isActive)}>
            <div className={"header"}>
                <div>{title}</div>
                <p className={"icon"}>{isActive ? '-' : '+'}</p>
            </div>

            <div>
                <div className={"content"}>
                    {isActive && <p className={"card-info"}>{content}</p>}
                </div>
            </div>

        </div>
    );
};

export default Accordion;