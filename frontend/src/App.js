import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          HealthIL Startup Assessment Form
        </h2>
      </header>
	  <div className="App-body">
		<div className="Card">
			<form>
			<label>Contact Name
				<br />
				<input name="contact_name" type="text" />
			</label>
			<br />
			<label> Company Name
				<br />
				<input name="company_name" type="text" />
			</label>
			<br />
			<label> Collaboration Desired
				<br />
				<select>
					<option value="observational">Observational Study/Research</option>
					<option value="poc">POC/MVP</option>
					<option value="pilot">Pilot</option>
					<option value="pilot_expansion"> Pilot Expansion (2nd site)</option>
					<option value="commercialization">Commercialization/Pre-commercialization</option>
				</select>
			</label>
			<br />
			<br />
			<input type="submit" value="Submit" />
		</form>
		</div>
		</div>
    </div>
  );
}

export default App;
