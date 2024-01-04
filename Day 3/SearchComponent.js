import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<div className="App-header">
			<h1>Explore Our Products</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for Products"
				/>
			</div>
		</div>
	);
}

export default SearchComponent;
