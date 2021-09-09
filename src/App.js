import './App.css';
import {Header} from "./components/header";
import {Home} from "./pages/Home";
import {Route} from "react-router-dom";
import {Cart} from "./pages/Cart";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPizzaAC} from "./reducers/pizza-reducer";


function App() {
    const pizza = useSelector  (state => state.pizza.items)
    const dispatch = useDispatch()

    useEffect(() => {

        axios.get('http://localhost:3000/db.json')
            .then(res => {

                dispatch(setPizzaAC(res.data.pizzas))
            })

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
