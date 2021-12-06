import './../App.css';
import {Header} from '../components/core';
import { useParams } from "react-router-dom";


function InternalAssessment(props) {
    let params = useParams();
    var application = params.application;
    return (
        <div className="App">
            <Header title={`${application} Internal Assessment`} />
        </div>
    );
}

export default InternalAssessment;