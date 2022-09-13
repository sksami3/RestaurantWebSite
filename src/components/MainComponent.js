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
import { Routes, Route, useParams } from 'react-router-dom';
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

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }


    render() {
        const HomePage = () => {
            console.log('in home page');
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = (match) => {
            let {dishId} = useParams();
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />}></Route>
                    {/* <Menu dishes={this.state.dishes} onClk={(dishId) => this.onDishSelect(dishId)} /> */}
                    <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
                    <Route exact path="/contactus" element={<Contact />} />
                    {/* <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                    <Route path="/menu/:dishId" element={<DishWithId />} />
                    <Route path="/" to="/home" />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
