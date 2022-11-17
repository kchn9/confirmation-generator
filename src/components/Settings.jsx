import { css } from "@emotion/react";
import Switch from "./Switch";
import { useEffect, useRef } from "react";

export default function Settings({
  handleUTR,
  setHandleUTR,
  handleDoubles,
  setHandleDoubles,
  setSettingsVisible,
}) {
  const settingsRef = useRef(null);
  useEffect(() => {
    settingsRef.current.addEventListener("mouseleave", () =>
      setSettingsVisible(false)
    );
  }, [settingsRef]);

  return (
    <aside
      ref={settingsRef}
      css={css`
        box-sizing: border-box;
        position: absolute;
        display: block;
        width: 100%;
        color: var(--text-secondary);
        background-color: rgba(0, 0, 0, 0.84);
        padding: 1.2em 30vw 0.8em 30vw;

        @media screen and (max-width: 768px) {
          padding: 1.2em 20vw 0.8em 20vw;
        }

        @media screen and (max-width: 425px) {
          padding: 1.2em 5vw 0.8em 5vw;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          min-height: 100px;
        `}
      >
        <Switch
          label="Handle UTR?"
          value={handleUTR}
          onChange={() => setHandleUTR((prev) => !prev)}
        />
        <Switch
          label="Handle doubles?"
          value={handleDoubles}
          onChange={() => setHandleDoubles((prev) => !prev)}
        />
      </div>
    </aside>
  );
}
