import { css } from "@emotion/react";

export default function TextInput({ placeholder }) {
  return (
    <input
      css={css`
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-radius: 0.4em;
        padding: 0.6em 0.4em 0.6em 1em;
        font-size: clamp(10px, 1.3vw, 24px);
        line-height: 0;
        font-weight: 100;
        font-family: inherit;
        outline: 3px solid transparent;

        &::placeholder {
          color: rgba(0, 0, 0, 0.42);
        }

        &:focus {
          outline: 3px solid var(--background-secondary);
        }
      `}
      type="text"
      placeholder={placeholder}
    />
  );
}
