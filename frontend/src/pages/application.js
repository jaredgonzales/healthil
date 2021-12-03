import logo from './../logo.svg';
import './../App.css';

function ApplicationForm() {
	return (
		<div className="App">
			<header className="App-header">
				<h2>
					HealthIL Startup Assessment Form
				</h2>
			</header>
			<div className="App-body">
				<div className="Card">
					<form class="input-form" action="http://localhost:5001/healthil-tamid/us-central1/helloName">
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
							<select id="collaboration" name="collaboration">
								<option></option>
								<option value="observational">Observational Study/Research</option>
								<option value="poc">POC/MVP</option>
								<option value="pilot">Pilot</option>
								<option value="pilot_expansion"> Pilot Expansion (2nd site)</option>
								<option value="commercialization">Commercialization/Pre-commercialization</option>
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
