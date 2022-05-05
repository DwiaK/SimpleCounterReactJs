// Imports
import { useState } from 'react';

// Application Imports
import HomePageView from "../view/pages/HomePage";

const HomePageController = () => {
    // HomePage Model
    const [counter, setCounter] = useState(0);
    
    // HomePage Controller
    function incrementCounter(){
        setCounter(counter + 1);
    }

    function decrementCounter(){
        setCounter(counter - 1);
    }

    function resetCounter(){
        setCounter(0);
    }

    // HomePage View
    return(
        <HomePageView
            counter={counter}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            resetCounter={resetCounter}
        />
    );
}

export default HomePageController;