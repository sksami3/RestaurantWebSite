// import './App.css';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
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
                    <Route exact path="/menu" element={<Menu dishes={this.state.dishes} render={() => ({})} />} />
                    <Route exact path="/contactus" element={<Contact />} />
                    {/* <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                    <Route path="/" to="/home" />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
