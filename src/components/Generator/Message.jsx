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
        padding: 1.4em 7.6em 1.4em 1.4em;
        display: flex;
        align-items: center;
        font-size: clamp(10px, 1.3vw, 18px);
        margin: 0.4em;
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
          background-color: transparent;
          border-radius: 1em;
          border: 2px solid var(--background-primary);
          color: var(--background-primary);
          font-size: 1em;
          padding: 0.4em 0.7em;
          transition: all ease 200ms;

          &:hover {
            border: 2px solid var(--background-secondary);
            color: var(--background-secondary);
          }
        `}
        onClick={() => handleCopy(pRef)}
      >
        Copy!
      </button>
    </p>
  );
}
