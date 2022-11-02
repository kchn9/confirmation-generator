import { useState } from "react";
import { Header, Settings, Generator, Footer } from "./components/";

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [handleUTR, setHandleUTR] = useState(false);
  const [handleDoubles, setHandleDoubles] = useState(false);

  return (
    <>
      <Header
        settingsVisible={settingsVisible}
        setSettingsVisible={setSettingsVisible}
      />
      {settingsVisible && (
        <Settings
          handleUTR={handleUTR}
          setHandleUTR={setHandleUTR}
          handleDoubles={handleDoubles}
          setHandleDoubles={setHandleDoubles}
        />
      )}
      <Generator handleUTR={handleUTR} handleDoubles={handleDoubles} />
      <Footer />
    </>
  );
}
