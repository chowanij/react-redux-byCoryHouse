import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  const isTrue = true;
  return(
    <table className="table">
      <thead>
      {isTrue &&
      (
        <tr>
          <th colspan="5"> COURSES TABLE </th>
       </tr>
      )}
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Auhor</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course}/>
      )}
      </tbody>
    </table>
  );

};

export default CourseList;
