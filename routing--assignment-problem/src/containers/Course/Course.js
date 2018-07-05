import React, {Component} from 'react';
import queryString from 'query-string';

class Course extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const {id} = this.props.match.params;
        const {title: courseTitle} = queryString.parse(this.props.location.search);

        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;