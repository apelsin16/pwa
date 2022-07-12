import * as React from "react";
// import {useAddToHomescreenPrompt} from "./useAddToHomescreenPrompt";
import classNames from "classnames";
import './App.css';
import {useEffect} from "react";

function App() {
    // const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    // const [isVisible, setVisibleState] = React.useState(false);
    // const hide = () => setVisibleState(false);

    const isLandscape = () => window.matchMedia('(orientation:landscape)').matches,
        [orientation, setOrientation] = React.useState(isLandscape() ? 'landscape' : 'portrait'),

        onWindowResize = () => {
            // @ts-ignore
            clearTimeout(window.resizeLag)
            // @ts-ignore
            window.resizeLag = setTimeout(() => {
                // @ts-ignore
                delete window.resizeLag
                setOrientation(isLandscape() ? 'landscape' : 'portrait')
            }, 200)
        }

    // const [angle, setAngle] = React.useState(window.screen.orientation.angle);

    // const [orientation, setOrientation] = React.useState(window.screen.orientation.type)

    // const [size, setSize] = React.useState([0, 0]);

    // React.useEffect(() => {
    //     console.log('orientation: ', orientation, 'angle:', angle, 'size: ', size);
    //     setOrientation(window.screen.orientation.type);
    //     setAngle(window.screen.orientation.angle);
    // },[size])

    React.useEffect(() => (
        onWindowResize(),
            window.addEventListener('resize', onWindowResize),
            () => window.removeEventListener('resize', onWindowResize)
    ),[])

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
