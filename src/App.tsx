import React from "react";
import "./App.css";
import { Status } from "./MapView/mapModel";
import MapView from "./MapView/MapView";

function App() {
  const [url, setUrl] = React.useState("");

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleChangeUrl = React.useCallback((event: any) => {
    const { value } = event.target;
    setUrl(value);
  }, []);

  return (
    <div className="App">
      <h1>Map your future</h1>
      <MapView markers={Object.values(testData)} />
      <form className="url-form" onSubmit={handleSubmit}>
        <label>
          Enter your URL:
          <input
            className="url-input margin-left-10"
            type="text"
            name="name"
            placeholder="URL"
            value={url}
            onChange={handleChangeUrl}
          />
        </label>
        <input type="submit" value="Load map" className="submit-btn margin-left-10" />
      </form>
    </div>
  );
}

const testData = {
  1: {
    pos: {
      lat: 47.495632,
      lng: 19.061795,
    },
    name: "marker id 1",
    icon: "https://www.iconninja.com/files/352/789/313/gear-icon.png",
    status: Status.LVL1,
    details: "<b>some detailed information related to the given marker</b>",
  },
  2: {
    pos: {
      lat: 47.505735,
      lng: 19.061895,
    },
    name: "marker id 2",
    icon: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    status: Status.LVL4,
    details: "",
  },
};

export default App;
