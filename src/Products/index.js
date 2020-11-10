import React, { useEffect, useState, useContext } from 'react'
// import axios from 'axios'
import Product from './Product'
import './style.scss'
import dummy from './index.json'
import { SpinnerContext } from '../WithSpinner'

export default function Products() {
	
	const [products] = useState(dummy.groups);
	// const [products, setProducts] = useState(/*[]*/);
	const [setSpinner] = useContext(SpinnerContext);

	useEffect(() => {
		setSpinner(false);
	}, [setSpinner])

/*	useEffect(() => {
		
		const maxAttepts = 10;
		let attempts = 0;

		const getData = () => {

			if (++attempts === maxAttepts) return;

			axios.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
				.then(res => {
					setSpinner(false)
					setProducts(res.data.groups)
				})
				.catch(err => getData())
		}
		getData();

	}, [setSpinner])
*/
	return (
		<div className="products">
			{ products.map( product => <Product key= { product.id } {...product} />) }
		</div>
	)
}