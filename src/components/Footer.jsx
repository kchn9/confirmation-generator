import { css } from "@emotion/react";

export default function Footer() {
  return (
    <footer
      css={css`
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        background-color: var(--text-primary);
        padding: 0.4em 4em;
        text-align: center;
        font-size: 0.6em;
        letter-spacing: 1.4px;
        color: var(--text-secondary);
      `}
    >
      Created with 🧡 by&nbsp;
      <a
        css={css`
          text-decoration: none;
          color: var(--background-primary);
        `}
        href="https://github.com/kchn9"
        target="_blank"
      >
        kchn9
      </a>
      &nbsp;©
    </footer>
  );
}
