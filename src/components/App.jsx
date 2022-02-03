import Data from "./Data";
import taxi from '../images/yellow-taxi-cab.png';
const App = () => {


    return (
        <div className='app'>app components, data
         <Data/>
         <img src={taxi} alt='image' width="250"/>
        </div>
    );
};

export default App;
