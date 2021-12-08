import './../App.css';
import './../css/form.css';
import { Header } from '../components/core';
import { useParams } from "react-router-dom";
import ApplicationView from './applicationView';


function InternalAssessment() {
    let params = useParams();
    var application = params.application;
    return (
        <div className="App">
            <Header title={`${application} Internal Assessment`} />
            <div class="Card">
                <ApplicationView application={application} />
                <br />
                <hr />
                <div class="assessment-form">
                    <h1>Internal Assessment Form</h1>
                    <form class="input-form">
                        <div class="field">
                            <label for="project_name">Project Name</label>
                            <br />
                            <input id="project_name" name="project_name" placeholder="Name of project..." type="text" />
                        </div>
                        <div class="field">
                            <label for="internal_contact_name">Internal Contact Name</label>
                            <br />
                            <input id="internal_contact_name" name="internal_contact_name" placeholder="Full name (Internal)..." type="text" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InternalAssessment;