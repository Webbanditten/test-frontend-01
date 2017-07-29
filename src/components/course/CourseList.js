import React, {PropTypes} from 'react';
import CourseListRow from './courseListRow';

const Courselist = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Cateogory</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
            {courses.map(course => 
                <CourseListRow key={course.id} course={course} />
            )}
            </tbody>
        </table>
    );
};

Courselist.propTypes = {
    courses: PropTypes.array.isRequired
};

export default Courselist;