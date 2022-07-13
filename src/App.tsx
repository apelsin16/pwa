import * as React from "react";
// import {useAddToHomescreenPrompt} from "./useAddToHomescreenPrompt";
import classNames from "classnames";
import './App.css';
import {useEffect} from "react";

function App() {
    // const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    // const [isVisible, setVisibleState] = React.useState(false);
    // const hide = () => setVisibleState(false);



    const [angle, setAngle] = React.useState(window.screen.orientation.angle);

    const [orientation, setOrientation] = React.useState(window.screen.orientation.type)

    const [size, setSize] = React.useState([0, 0]);

    React.useEffect(() => {
        console.log('orientation: ', orientation, 'angle:', angle, 'size: ', size);
        setOrientation(window.screen.orientation.type);
        setAngle(window.screen.orientation.angle);
        window.screen.orientation.lock("portrait-primary");
    },[size])



    // React.useLayoutEffect(() => {
    //     function updateSize() {
    //         setSize([window.innerWidth, window.innerHeight]);
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);


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
        <div className={classNames("container App", {
            // "turnedLeft": angle === 90,
            // "turnedRight": angle === 270
        })} >
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
                <p className='card-texr'>Orientation: {orientation}</p>
                {/*<p className='card-texr'>Angel: {angle}</p>*/}
                <a href="#"
                   className="btn btn-primary">Go somewhere</a>
            </div>

        </div>
    );
}

export default App;
