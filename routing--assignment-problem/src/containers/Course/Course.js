import React, {Component} from 'react';

class Course extends Component {
    state = {
        title: ''
    };


    componentDidMount() {
        console.log(this.props);
        // Another method to extract url query parameters
        const query = new URLSearchParams(this.props.location.search);

        for (let param of query.entries()) {
            this.setState({title: param[1]});
        }
    }

    render() {
        // IMPORTANT NOTE: we can pass the parameters like :id or :courseTitle in the path link or we can
        // use the search and pass it as query strings, and parse the query strings before render

        // const {courseId, courseTitle} = this.props.match.params;
        const {courseId} = this.props.match.params;
        const courseTitle = this.state.title;
        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;