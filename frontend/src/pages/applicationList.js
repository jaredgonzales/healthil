import './../App.css';
import { Header } from '../components/core';
import { LinkList } from './../components/list';
import { render } from 'react-dom';
import React from 'react';

// Lists all available Applications to Review
// https://reactjs.org/docs/faq-ajax.html
class ApplicationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        var listAPIURL = "/getApplications";
        fetch(listAPIURL)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Handle errors so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <Header title="Pending Applications" />
                    <div class="Card">
                        <LinkList items={items} baseURL="/internal-assessment" />
                    </div>
                </div>
            );
        }
    }
}
export default ApplicationList;
