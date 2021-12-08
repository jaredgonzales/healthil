import './../App.css';
import {Header} from '../components/core';
import {LinkList} from './../components/list';

// Lists all available Applications to Review



function ApplicationList() {
    /* Import list of startups from the database */
    var startupList = ['startup001', 'startup002', 'another_startup', 'new_startup']
    const hospitalName = "hospital001";
    var listAPIURL = "/getApplications?site=" + hospitalName;
    fetch(listAPIURL).then(response => response.json()).then(data => console.log(data));
    
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
