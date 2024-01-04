import React, { useState } from 'react';
import './products.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import apple from './apple.png';
import carrot from './carrot.jpg';
import capsicum from './capsicum.webp';
import orange from './orange.jpg'
import strawberry from './strawberry.jpg'


function App() {
  // Fruits and Vegetables Products
  const [courses, setCourses] = useState([
    { id: 1, name: 'Apple', price: 50, image: apple },
    { id: 2, name: 'Carrot', price: 40, image: carrot },
    { id: 3, name: 'Capsicum', price: 30, image: capsicum },
    { id: 4, name: 'Orange', price: 65, image: orange },
    { id: 5, name: 'Strawberry', price: 80, image: strawberry },
  ]);

  const [searchCourse, setSearchCourse] = useState('');

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
        />
      </main>
    </div>
  );
}

export default App;
