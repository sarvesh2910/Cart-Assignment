import React, {Component} from 'react';
import style from './CartItem.module.css';
import deleteIcon from '../../assets/delete.svg';

class CartItem extends Component {
	render() {
		let item = this.props.item;
		return (
			<div className={style.container}>
				{/*name and price*/}
				<div className={style.nameAndPrice}>
					<p className={style.productName}>{item.name}</p>
					<p className={style.productPrice}>{`$${item.price}/mo`}</p>
				</div>
				{/*quantity change buttons*/}
				<div className={style.quantity}>
					<button
							className={style.buttonRounded}
							onClick={() => { this.props.changeQuantity(item.name,'decrease'); }}>
						-
					</button>
					<input
						onBlur={() => { this.props.changeQuantity(item.name,'blur');}}
						onChange={(e) => { this.props.changeQuantity(item.name,'input',e.target.value);}}
						min={1}
						value={item.quantity}
						className={style.quantityInput}
						type="number"
					/>
					<button
							className={style.buttonRounded}
							onClick={() => {this.props.changeQuantity(item.name,'increase');}}>
						+
					</button>
				</div>
				{/*total price*/}
				<div className={style.productPriceTotal}>
					<p> ${item.total}/mo</p>
				</div>
				{/*delete button*/}
				<div className={style.deleteButton}>
					<button onClick={() => { this.props.deleteItem(item.name); }}>
						<img src={deleteIcon} alt="D"/>
					</button>
				</div>
			</div>
		);
	}
}

export default CartItem;
