// import './App.css';
import Menu from './MenuComponent';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { addComment, fetchDishes } from '../redux/ActionCreator';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />
    }
    return Wrapper;
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes())
});


class Main extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     dishes: DISHES,
        //     comments: COMMENTS,
        //     leaders: LEADERS,
        //     promotions: PROMOTIONS
        // };
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }


    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                />
            )
        }

        const DishWithId = (match) => {
            let { dishId } = useParams();
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
                    addComment={this.props.addComment}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess} />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />}></Route>
                    {/* <Menu dishes={this.props.dishes} onClk={(dishId) => this.onDishSelect(dishId)} /> */}
                    <Route exact path="/menu" element={<Menu dishes={this.props.dishes} />} />
                    <Route exact path="/contactus" element={<Contact />} />
                    {/* <DishDetail dish={this.props.dishes.filter(dish => dish.id === this.props.selectedDish)[0]} /> */}
                    <Route path="/menu/:dishId" element={<DishWithId />} />
                    <Route path="/about" element={<About leaders={this.props.leaders} />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
