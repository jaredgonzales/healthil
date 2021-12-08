import './../App.css';
import './../css/form.css';
import { Header } from '../components/core';
import { useParams } from "react-router-dom";
import ApplicationView from './applicationView';

function FormRadioOption(props) {
    var id = props.id;
    var label = props.label;
    var value = props.value;
    return (
        <div class="radio_option">
            <label for={id}>{label}</label>
            <br />
            <input id={id} name={id} value={value} type="radio" />
        </div>
    );
}

function GenerateRadioRating(props) {
    var max = props.max;
    var id = props.id;
    var legend = props.legend;

    var options = []
    for (var i = 1; i <= max; i++) {
        options.push(<FormRadioOption id={`${id}_${i}`} label={i} value={i} />)
    }


    return (
        <div class="full-field">
            <fieldset>
                <legend>{legend}</legend>
                {options}
            </fieldset>
        </div>
    );
}


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
                        <h2 class="full-field">Impact and Value</h2>
                        <GenerateRadioRating max="10" id="impact_patients" legend="How important is this to our patients?" />
                        <GenerateRadioRating max="10" id="num_patients" legend="Number of patients that need this solution" />
                        <GenerateRadioRating max="10" id="quick_patients" legend="How quickly will our patients see the impact?" />
                        <h2 class="full-field">Viability</h2>
                        <GenerateRadioRating max="10" id="viablility_relevant" legend="How clinically relevant is the product?" />
                        <input class="full-field" type="submit" value="Submit Assessment" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InternalAssessment;