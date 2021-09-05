import './App.css';
import {Header} from "./components/header";
import {Home} from "./pages/Home";
import {Route} from "react-router-dom";
import {Cart} from "./pages/Cart";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
