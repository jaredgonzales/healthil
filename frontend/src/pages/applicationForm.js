import {Header} from './../components/core';

import './../App.css';
import './../css/form.css';

function ApplicationForm() {
	return (
		<div className="App">
			<Header title="HealthIL Startup Application Form" />
			<div className="App-body">
				<div className="Card">
					<form class="input-form" action="/submitApplicationForm">
						<div class="field">
							<label for="contact_name">Contact Name</label>
							<br />
							<input id="contact_name" name="contact_name" placeholder="Full name..." type="text" />
						</div>

						<div class="field">
							<label for="company_name"> Company Name</label>
							<br />
							<input id="company_name" name="company_name" type="text" placeholder="Your Company Name" />
						</div>

						<div class="field">
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

						<div class="field">
							<label for="partnership"> Partnership Interest?</label>
							<br />
							<select id="partnership" name="partnership" required >
								<option></option>
								<option value="true">True</option>
								<option value="false">False</option>
							</select>
						</div>

						<br />
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default ApplicationForm;
