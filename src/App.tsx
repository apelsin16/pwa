import * as React from "react";
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";
import './App.css';

function App() {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = React.useState(false);
    const hide = () => setVisibleState(false);

    React.useEffect(
        () => {
            if (prompt) {
                setVisibleState(true);
            }
        },
        [prompt]
    );

    if (!isVisible) {
        return (<div className="App">
            nope
        </div>);
    }

  return (
    <div className="card">
        <div onClick={hide}>
            <button className='btn btn-primary' onClick={hide}>Close</button>
            Hello! Wanna add to homescreen?
            <button className='btn btn-primary' onClick={promptToInstall}>Add to homescreen</button>
        </div>
    </div>
  );
}

export default App;
