import {Header} from './../components/core';

import './../App.css';
import './../css/form.css';

function ApplicationView() {
	return (
		<div className="App">
			<Header title="{Company Name} Application" />
			<div className="App-body">
				<div className="Card">
					<div class="field">
                        <h2>Field 1</h2>
                    </div>
						
                    <div class="field">
                        <h2>Field 2</h2>
                    </div>
						
				</div>
			</div>
		</div>
	);
}
export default ApplicationView;
