import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />
                )
        })
        .reduce((arr, element) => arr.concat(element), []);

    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;