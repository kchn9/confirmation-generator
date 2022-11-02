import { css } from "@emotion/react";
import SettingsIcon from "../assets/settings-svgrepo-com.svg";

export default function Header({ settingsVisible, setSettingsVisible }) {
  return (
    <header
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--text-primary);
      `}
    >
      <button
        css={css`
          left: 2em;
          position: absolute;
          padding: 0.6em 0.7em;
          border-radius: 30%;
          cursor: pointer;
          background-color: transparent;
          border: none;

          &:hover {
            background-color: #434654;
          }

          @media screen and (max-width: 425px) {
            left: 0.6em;
            padding: 0.3em 0.4em;
          }
        `}
        type="button"
        onClick={() => setSettingsVisible(!settingsVisible)}
      >
        <img
          css={css`
            height: clamp(22px, 2.4vw, 42px);
          `}
          src={SettingsIcon}
          height="32px"
          alt="Settings icon"
        />
      </button>
      <h1
        css={css`
          text-transform: uppercase;
          background: -webkit-linear-gradient(
            var(--background-primary),
            var(--background-secondary)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: clamp(18px, 3vw, 42px);
          font-weight: 500;
          padding: 0.15em 0;
        `}
        onClick={() => window.location.reload(false)}
      >
        message generator
      </h1>
    </header>
  );
}
