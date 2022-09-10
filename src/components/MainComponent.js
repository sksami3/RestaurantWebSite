// import './App.css';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }


    render() {
        const HomePage = () =>{
            return(
                <Home />
            )
        }

        return (
            
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={HomePage}></Route>
                    {/* <Menu dishes={this.state.dishes} onClk={(dishId) => this.onDishSelect(dishId)} /> */}
                    <Route exact path="menu" element={<Menu dishes={this.state.dishes} render={() => ({})} />} />
                    {/* <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                    <Route path="/" to="/home" />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
