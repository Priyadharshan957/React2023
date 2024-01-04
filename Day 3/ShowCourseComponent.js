import React from 'react';

function ShowCourseComponent({ courses, 
	filterCourseFunction, 
	addCourseToCartFunction }) {
	return (
		<div className="product-list">
			{filterCourseFunction.length === 0 ? (
				<h1 className="no-results">
					Sorry , No Results.
				</h1>
			) : (
				filterCourseFunction.map((product) => (
					<div className="product" key={product.id}>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>Price: ₹{product.price}</p>
						<br/>
						<button
							className="add-to-cart-button"
						>
							Add to Cart
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default ShowCourseComponent;
