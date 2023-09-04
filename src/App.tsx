import {DensityMap} from "./components/DensityMap";
import {ClusterMap} from "./components/ClusterMap";
import './App.css'


function App() {
  return (
      <div className="maps">
        <div className="map-wrapper">
          <DensityMap />
        </div>
        <div className="map-wrapper">
          <ClusterMap />
        </div>
      </div>
  )
}

export default App;
