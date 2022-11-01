import { css } from "@emotion/react";
import TextInput from "../TextInput";
import PlayerInput from "./PlayerInput";

export default function Form({ handleDoubles }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      css={css`
        margin: min(2.5vw, 2.4em) 0;
      `}
    >
      <h2
        css={css`
          text-align: center;
          font-weight: 500;
          font-size: clamp(16px, 1.7vw, 32px);
          text-decoration: underline;
          &::first-letter {
            text-transform: capitalize;
          }
        `}
      >
        fill following data:
      </h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 0.5em;

          @media screen and (max-width: 425px) {
            gap: 0.3em;
          }
        `}
      >
        <div
          css={css`
            grid-column: 3 / span 8;
            @media screen and (max-width: 768px) {
              grid-column: 2 / span 10;
            }
          `}
        >
          <TextInput placeholder="Court name" />
        </div>

        {/* Team one*/}
        <div
          css={css`
            grid-column: 3 / span 8;
            @media screen and (max-width: 768px) {
              grid-column: 2 / span 10;
            }
          `}
        >
          {handleDoubles && <h2>Team 1</h2>}
          <PlayerInput playerNo={"one"} />
        </div>

        {handleDoubles && (
          <div
            css={css`
              grid-column: 3 / span 8;
              @media screen and (max-width: 768px) {
                grid-column: 2 / span 10;
              }
            `}
          >
            <PlayerInput playerNo={"two"} />
          </div>
        )}

        {/* Team two*/}
        {handleDoubles && (
          <div
            css={css`
              grid-column: 3 / span 8;
              @media screen and (max-width: 768px) {
                grid-column: 2 / span 10;
              }
            `}
          >
            <h2>Team 2</h2>

            <PlayerInput playerNo={"one"} />
          </div>
        )}

        <div
          css={css`
            grid-column: 3 / span 8;
            @media screen and (max-width: 768px) {
              grid-column: 2 / span 10;
            }
          `}
        >
          <PlayerInput playerNo={"two"} />
        </div>
        <button
          css={css`
            margin-top: 2em;
            grid-column: 6 / span 2;
            font-size: clamp(12px, 1.4vw, 18px);
            background-color: transparent;
            color: var(--text-primary);
            text-transform: uppercase;
            padding: 0.5em;
            border-radius: 1em;
            font-weight: 800;
            border: 3px solid var(--text-primary);
            cursor: pointer;
            transition: all ease 200ms;
            outline: 2px solid transparent;

            &:hover {
              border: 3px solid transparent;
              background-color: var(--background-primary);
            }

            @media screen and (max-width: 728px) {
              grid-column: 5 / span 4;
            }
          `}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
