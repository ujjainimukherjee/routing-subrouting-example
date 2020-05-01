import React, { Component } from 'react';

// course is a com[onent which will show me the description of teh course
// how am i getting the course cdetails by querystring
// getting courese id from params.match id

// 

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    componentDidMount () {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props);
        // getting from location.search url
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param)
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;