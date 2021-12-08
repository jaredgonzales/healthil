import { Header } from './../components/core';

import './../App.css';
import './../css/form.css';

export function FormTextField(props) {
	var id = props.id;
	var label = props.label;
	var placeholder = props.placeholder;
	return (
		<div className="field">
			<label for={id}> {label}</label>
			<br />
			<input id={id} name={id} placeholder={placeholder} type="text" />
		</div>
	);
}

function ApplicationForm() {
	return (
		<div className="App">
			<Header title="HealthIL Startup Application Form" />
			<div className="App-body">
				<div className="Card">
					<form class="input-form" action="/submitApplicationForm">

						<FormTextField id="contact_name" label="Contact Name" placeholder="Full name" />

						<FormTextField id="company_name" label="Company Name" placeholder="Your company name" />

						<div class="field">
							<label for="email"> Email</label>
							<br />
							<input id="email" name="email" type="text" placeholder="example@gmail.com" />
						</div>

						<FormTextField id="website" placeholder="www.example.com" label="Website" />
						<FormTextField id="role" placeholder="Your role in company" label="Role" />
						<FormTextField id="country" placeholder="Country" label="Country" /> {/* TODO: Make this a dropdown */}
						<FormTextField id="product_type" placeholder="Product category" label="Product Type" />

						
						<div class="full-field">
							<label for="collaboration"> Collaboration Desired</label>
							<br />
							<select id="collaboration" name="collaboration" required >
								<option></option>
								<option value="observational">Observational Study/Research</option>
								<option value="poc">POC/MVP</option>
								<option value="pilot">Pilot</option>
								<option value="pilot_expansion"> Pilot Expansion (2nd site)</option>
								<option value="commercialization">Commercialization/Pre-commercialization</option>
							</select>
						</div>

						<div class="full-field">
							<label for="partnership"> Partnership Interest?</label>
							<br />
							<select id="partnership" name="partnership" required >
								<option></option>
								<option value="true">True</option>
								<option value="false">False</option>
							</select>
						</div>

						<br />
						<input class="full-field" type="submit" value="Submit Application" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default ApplicationForm;
