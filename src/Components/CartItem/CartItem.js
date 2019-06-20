import React, {Component} from 'react';
import style from './CartItem.module.css';
import deleteIcon from '../../assets/delete.svg';

class CartItem extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.item.quantity !== this.props.item.quantity
	}

	render() {
		let item = this.props.item;
		return (
			<div className={style.container}>
				<div className={style.nameAndPrice}>
					<p className={style.productName}>{item.name}</p>
					<p className={style.productPrice}>{`$${item.price}/mo`}</p>
				</div>
				<div className={style.quantity}>
					<button
						className={style.buttonRounded}
						onClick={() => {
							this.props.changeQuantity(item.name,'increase');
						}}>
						+
					</button>
					<input
						onBlur={() => {
							this.props.changeQuantity(item.name,'blur');
						}}
						onChange={(e) => {
							this.props.changeQuantity(item.name,'input',
								e.target.value);
						}}
						min={1}
						value={item.quantity}
						className={style.quantityInput}
						type="number"
					/>
					<button
						className={style.buttonRounded}
						onClick={() => {
							this.props.changeQuantity(item.name,'decrease');
						}}>
						-
					</button>
				</div>
				<div className={style.productPriceTotal}>
					<p> ${item.total}</p>
				</div>
				<div className={style.deleteButton}>
					<button
						onClick={() => {
							this.props.deleteItem(item.name);
						}}>
						<img src={deleteIcon} alt="D"/>
					</button>
				</div>
			</div>
		);
	}
}

export default CartItem;
