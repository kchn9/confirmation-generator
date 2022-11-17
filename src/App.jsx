import { useState } from "react";
import { Header, Settings, Generator } from "./components/";

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
          setSettingsVisible={setSettingsVisible}
        />
      )}
      <Generator handleUTR={handleUTR} handleDoubles={handleDoubles} />
    </>
  );
}
