import { Header } from './../components/core';

import './../App.css';
import './../css/form.css';

function ApplicationView(props) {
	var applicationName = props.application
	var applicationData = fetch("/readApplication?company_name=" + { applicationName })
		.then(response => response.json())
		.then(data => {
			console.log(data);
			return data;
		});

	var company_name = applicationData.company_name;
	var contact_name = applicationData.contact_name;

	return (
		<div className="Card">
			<div class="input-form">
				<h1>Submitted Application</h1>
				<div class="field">
					<label for="example-field">Example label</label>
					<br />
					<input id="example-field" type="text" placeholder="InputHere Incorporated" disabled></input>
				</div>
				<div class="field">
					<label for="example-field2">Second Example label</label>
					<br />
					<input id="example-field2" type="text" placeholder="FullName GuyHere" disabled></input>
				</div>
				<div class="field">
					<h2>{company_name}</h2>
				</div>

				<div class="field">
					<h2>{contact_name}</h2>
				</div>
			</div>
		</div>
	);
}
export default ApplicationView;
