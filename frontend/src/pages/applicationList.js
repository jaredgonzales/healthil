import './../App.css';
import {Header} from '../components/core';
import {LinkList} from './../components/list';

// Lists all available Applications to Review

/* Import list of startups from the database */
const startupList = ['startup001', 'startup002', 'another_startup', 'new_startup']

function ApplicationList() {
    return (
        <div className="App">
            <Header title="Pending Applications" />
            <div class="Card">
                <LinkList items={startupList} baseURL="/internal-assessment" />
            </div>
        </div>
    );
}
export default ApplicationList;
