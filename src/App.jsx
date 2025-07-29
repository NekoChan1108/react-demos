import React from 'react';
import Counter from "./components/Counter.jsx";
import Todo from "./components/Todo.jsx";
import Meals from "./components/Meals.jsx";
import {Cancel} from "axios";
import Calculator from "./components/Calculator.jsx";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor.jsx";
import HiddenSearchBar from "./components/HiddenSearchBar.jsx";
import TestImonials from "./components/TestImonials.jsx";
import Accordion from "./components/Accordion.jsx";
import Form from "./components/Form.jsx";

const App = () => {
    return (
        <div>
            {/*<Counter/>*/}
            {/*<Todo/>*/}
            {/*<Meals/>*/}
            {/*<Calculator/>*/}
            {/*<ToggleBackgroundColor/>*/}
            {/*<HiddenSearchBar/>*/}
            {/*<TestImonials/>*/}
            {/*<div className={"accordion-container"}>*/}
            {/*    {*/}
            {/*        accordionData.map(({title, content}) => {*/}
            {/*            return <Accordion title={title} content={content} key={Math.random()}/>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            <Form/>
        </div>
    );
};

export default App;