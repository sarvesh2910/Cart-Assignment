import React, {Component} from 'react';
import style from './Cart.module.css';
import data from '../../Utils/product';
import CartItem from '../../Components/CartItem/CartItem';
import TableHeader from '../../Components/TableHeader/TableHeader';

class Cart extends Component {

	state = {
		items: data,
	};

	//updates the item quantity in the cart depending on cases. handles negative values and on focus loose.
	changeQuantity = (name, action,value) => {
		let index = this.state.items.findIndex(item => item.name === name);
		let items = [...this.state.items];
		switch (action) {
			case 'increase' :
				(items[index].quantity < 99)? items[index].quantity++:items[index].quantity=99;
				break;
			case 'decrease':
				!(items[index].quantity <= 1) && items[index].quantity--;
				break;
			case 'input':
				items[index].quantity =  value.toString().length>2?items[index].quantity:value;
				break;
			case 'blur':
				if(Math.floor(items[index].quantity)===0)items[index].quantity++;
				break;
			default :
				return
		}
		items[index].total = items[index].quantity * items[index].price;
		this.setState({ items });
	};

	//deletes the item from the cart
	deleteItem = name => {
		let newCart = this.state.items.filter(item => {
			return item.name !== name;
		});
		this.setState({ items: newCart});
	};

	//used to calculate total value of all items
	calculateTotal = () => {
		let totalPrice = 0;
		this.state.items.map(item => {
			totalPrice = totalPrice + item.price * item.quantity;
		});
		return totalPrice;
	};

	//prints in the console using table method.
	printCart = () => {
		console.log('Your Cart');
		console.table(this.state.items,['name','price','quantity','total']);
		console.log(
			`Number of Items : ${this.state.items.length} , Total Price : $${this.calculateTotal()}/mo`,
		);
	};

	render() {
		let items = this.state.items;
		return (
			<div className={style.container}>
				<header>
					<h2>Your Cart</h2>
				</header>
				{items.length > 0 ? (
					<>
						{/*table header*/}
						<TableHeader/>
						{/*list of cart items*/}
						<div className={style.itemContainer}>
							{items.map(item => (
								<CartItem
									key={item.id}
									changeQuantity={this.changeQuantity}
									deleteItem={this.deleteItem}
									item={item}
								/>
							))}
						</div>
						{/*table footer */}
						<div className={style.cartFooter}>
							<h3 className={style.productNamePrice}>
								Number of Items : {items.length}
							</h3>
							<h3 className={style.quantity}> Total </h3>
							<h3 className={style.total}>${this.calculateTotal()}/mo</h3>
						</div>
						{/*save button*/}
						<button onClick={this.printCart}
								className={style.saveButton}>
							Save
						</button>
					</>
				) : (
					<div><p className={style.empty}>
						No items in your cart!
					</p></div>
				)}
			</div>
		);
	}
}

export default Cart;
