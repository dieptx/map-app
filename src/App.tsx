import React from "react";
import "./App.css";
import { Marker, Status } from "./MapView/mapModel";
import MapView from "./MapView";
import FormUrlView from "./FormUrlView";
import { fetchMarkersByUrl } from "./api";

let timer: NodeJS.Timeout;

function App() {
  const [markers, setMarkers] = React.useState<Marker[]>([]);
  const [url, setUrl] = React.useState<string | undefined>();
  const [error, setError] = React.useState<string | undefined>();

  React.useEffect(() => {
    timer = setInterval(() => {
      fetchMarkers(url);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [url]);

  React.useEffect(() => {
    fetchMarkers(url);
  }, [url]);

  const fetchMarkers = React.useCallback((url?: string) => {
    fetchMarkersByUrl(url)
      .then((response) => {
        const markers: Marker[] = Object.values(response).map((m: any) => ({
          ...m,
          pos: { lat: m.pos.lat, lng: m.pos.long },
        }));
        setError(undefined);
        setMarkers(markers);
      })
      .catch((error) => {
        clearInterval(timer);
        setError("Oops, somethings went wrong try to get map with URL");
      });
  }, []);

  const handleLoadMapUrl = React.useCallback((url: string) => {
    setUrl(url);
  }, []);

  const handleResetUrl = React.useCallback(() => {
    setUrl(undefined);
  }, []);

  return (
    <div className="App">
      <h1>Map your future</h1>
      <MapView markers={markers} />
      <FormUrlView onLoadMapUrl={handleLoadMapUrl} onReset={handleResetUrl} error={error} />
    </div>
  );
}

export default App;
