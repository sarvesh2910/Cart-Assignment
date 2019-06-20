import style from '../../Container/Cart/Cart.module.css';
import React from 'react';

function TableHeader() {
	return <div className={style.tableHeader}>
		<p className={style.productNamePrice}> Product Name & Price</p>
		<p className={style.quantity}> Quantity</p>
		<p className={style.total}> Total</p>
	</div>;
}
export default TableHeader