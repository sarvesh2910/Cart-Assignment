import React, {Component} from 'react';
import style from './Cart.module.css';
import data from '../../Utils/product';
import CartItem from '../../Components/CartItem/CartItem';

class Cart extends Component {
	state = {
		items: data,
	};

	changeQuantity = (name, action,value) => {
		let index = this.state.items.findIndex(item => item.name === name);
		let items = this.state.items;
		switch (action) {
			case 'increase' :
				items[index].quantity++;
				break;
			case 'decrease':
				!(items[index].quantity <= 1) && items[index].quantity--;
				break;
			case 'input':
				items[index].quantity = value;
				break;
			case 'blur':
				if(Math.floor(items[index].quantity)===0)items[index].quantity++;
				break;
			default :
				return
		}
		items[index].total = items[index].quantity * items[index].price;
		this.setState({
				items: items,
		});
	};

	deleteItem = name => {
		let newCart = this.state.items.filter(item => {
			return item.name !== name;
		});
		this.setState({
			items: newCart,
		});
	};

	calculateTotal = () => {
		let totalPrice = 0;
		this.state.items.map(item => {
			totalPrice = totalPrice + item.price * item.quantity;
		});
		return totalPrice;
	};

	printCart = () => {
		console.log('Your Cart');
		console.table(this.state.items);
		console.log(
			`Number of Items : ${
				this.state.items.length
				} , Total Price : $${this.calculateTotal()}/mo`,
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
						<div className={style.tableHeader}>
							<p className={style.productNamePrice}> Product Name
								& Price</p>
							<p className={style.quantity}> Quantity</p>
							<p className={style.total}> Total</p>
						</div>
						<div className={style.itemContainer}>
							{items.map(item => (
								<CartItem
									key={item.name}
									changeQuantity={this.changeQuantity}
									deleteItem={this.deleteItem}
									item={item}
								/>
							))}
						</div>
						<div className={style.cartFooter}>
							<h3 className={style.productNamePrice}>
								Number of Items : {items.length}
							</h3>
							<h3 className={style.quantity}> Total </h3>
							<h3 className={style.total}>${this.calculateTotal()}/mo</h3>
						</div>
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
