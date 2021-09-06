import './App.css';
import {Header} from "./components/header";
import {Home} from "./pages/Home";
import {Route} from "react-router-dom";
import {Cart} from "./pages/Cart";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [pizza, setPizza] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3000/db.json')
            .then(res=>setPizza(res.data.pizzas))

        // fetch('http://localhost:3000/db.json')
        //     .then(res => res.json())
        //     .then(json =>setPizza(json.pizzas))

    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/'>
                    <Home items={pizza}/>
                </Route>
                <Route exact path='/cart'>
                    <Cart/>
                </Route>
            </div>
        </div>
    );
}

export default App;
