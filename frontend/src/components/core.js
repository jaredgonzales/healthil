import './../App.css';

export function Header(props) {
    return (
        <header className="App-header">
            <h2>
                {props.title}
            </h2>
        </header>
    )
}