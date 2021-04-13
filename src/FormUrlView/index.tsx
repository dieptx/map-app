import React from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";

type Props = {
  onLoadMapUrl: (url: string) => void;
  onReset?: () => void;
  error?: string;
};

function FormUrlView(props: Props) {
  const { onLoadMapUrl, onReset, error } = props;

  const [url, setUrl] = React.useState("");

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      onLoadMapUrl(url);
    },
    [onLoadMapUrl, url]
  );

  const handleChangeUrl = React.useCallback((event: any) => {
    const { value } = event.target;
    setUrl(value);
  }, []);

  const handleReset = React.useCallback(() => {
    if (!onReset) {
      return;
    }
    setUrl("");
    onReset();
  }, [onReset]);

  return (
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
      <button onClick={handleReset} className="submit-btn margin-left-10">
        Reset
      </button>
      {error && <p className="error-label">{error}</p>}
    </form>
  );
}

export default React.memo(FormUrlView);
