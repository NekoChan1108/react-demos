import React from 'react';
import Counter from "./components/Counter.jsx";
import Todo from "./components/Todo.jsx";
import Meals from "./components/Meals.jsx";
import {Cancel} from "axios";
import Calculator from "./components/Calculator.jsx";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor.jsx";

const App = () => {
    return (
        <div>
            {/*<Counter/>*/}
            {/*<Todo/>*/}
            {/*<Meals/>*/}
            {/*<Calculator/>*/}
            <ToggleBackgroundColor/>
        </div>
    );
};

export default App;