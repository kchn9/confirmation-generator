import { css } from "@emotion/react";

export default function Message(props) {
  return (
    <p
      css={css`
        position: relative;
        color: var(--text-secondary);
        background-color: var(--text-primary);
        padding: 1.4em 7.6em 1.4em 1.4em;
        display: flex;
        align-items: center;
        font-size: clamp(12px, 1.4vw, 18px);
        margin: 0.4em;
        line-height: 1.6;
      `}
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
      >
        Copy!
      </button>
    </p>
  );
}
