import * as React from "react";
// import {useAddToHomescreenPrompt} from "./useAddToHomescreenPrompt";
import './App.css';

function App() {
    // const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    // const [isVisible, setVisibleState] = React.useState(false);
    // const hide = () => setVisibleState(false);


    // React.useEffect(
    //     () => {
    //         if (prompt) {
    //             setVisibleState(true);
    //         }
    //     },
    //     [prompt]
    // );

    // if (!isVisible) {
    //     return (<div className="App">
    //         nope
    //     </div>);
    // }

    return (
        <div className="container App">
            {/*<div onClick={hide}>*/}
            {/*    <button className='btn btn-primary' onClick={hide}>Close</button>*/}
            {/*    Hello! Wanna add to homescreen?*/}
            {/*    <button className='btn btn-primary' onClick={promptToInstall}>Add to homescreen</button>*/}
            {/*</div>*/}
            <div className="card bg-info p-2">
                <img src="https://klever.blog/wp-content/uploads/2018/05/kakimi-bivaut-it-kompanii.png"
                     alt="it"
                    className='card-img-top'
                />
                <h5 className="card-title">Card title</h5>
                <p className='card-texr'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consequuntur dolor ducimus expedita
                    facere in maxime non totam vero. Dignissimos dolor ea earum esse est facilis molestiae nihil nisi porro
                    repudiandae. Accusantium consectetur corporis dolor ducimus esse ex, excepturi fugit illo ipsum iste,
                    mollitia officiis omnis sed tempore velit?</p>
                <a href="#"
                   className="btn btn-primary">Go somewhere</a>
            </div>

        </div>
    );
}

export default App;
