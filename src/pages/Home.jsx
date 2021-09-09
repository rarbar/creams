import {Categorise} from "../components/Categorise";
import {SortPopup} from "../components/SortPopap";
import {PizzaComponent} from "./pizzaComponent";

export const Home = ({items}) => {

    return (
        <div className="container">
            <div className="content__top">
                <Categorise items={[
                    'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'
                ]}/>
                <SortPopup items={[
                    {name:'популярности',type:'popular'},
                    {name:'цене',type:'price'},
                    {name:'алфавиту',type:'alfavite'}
                ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj) => (
                        <PizzaComponent key={obj.id} {...obj} />))
                }

            </div>
        </div>
    )
}