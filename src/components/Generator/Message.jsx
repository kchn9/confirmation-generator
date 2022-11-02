import { css } from "@emotion/react";
import { useRef } from "react";

export default function Message(props) {
  const pRef = useRef(null);
  function handleCopy(ref) {
    navigator.clipboard.writeText(ref.current.innerText.slice(0, -6));
  }

  return (
    <p
      css={css`
        position: relative;
        color: var(--text-secondary);
        background-color: var(--text-primary);
        padding: 1.4em 7em 1.4em 1.4em;
        display: flex;
        align-items: center;
        font-size: clamp(10px, 1.3vw, 18px);
        margin: 0.4em 0 0 0;
        line-height: 1.4;
      `}
      ref={pRef}
    >
      {props.children}
      <button
        css={css`
          position: absolute;
          right: 2em;
          cursor: pointer;
          font-weight: 700;
          background: -webkit-linear-gradient(
            var(--background-primary),
            var(--background-secondary)
          );
          text-transform: uppercase;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-radius: 1em;
          border: 1px solid var(--background-primary);
          font-size: clamp(10px, 1.2vw, 16px);
          padding: 0.6em 1.4em;
          transition: all ease 200ms;

          &:hover {
            border-color: var(--text-primary);
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
          }
        `}
        onClick={() => handleCopy(pRef)}
      >
        copy
      </button>
    </p>
  );
}
