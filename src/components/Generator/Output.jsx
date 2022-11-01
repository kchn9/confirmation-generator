import { css } from "@emotion/react";

import Message from "./Message";
import messsageTemplates from "../../utils/messages";

export default function Output({
  courtName,
  teamOne,
  teamTwo,
  handleUTR,
  handleDoubles,
}) {
  const messages = handleUTR
    ? messsageTemplates.utrMessages
    : messsageTemplates.defaultMessages;

  if (handleDoubles) {
    return (
      <section
        css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        `}
      >
        {messages.map((message) => (
          <div
            css={css`
              grid-column: 3 / span 8;
              @media screen and (max-width: 768px) {
                grid-column: 2 / span 10;
              }
            `}
          >
            <Message>
              {`${courtName} / ${teamOne.playerOne.fullName} (${teamOne.playerOne.countryCode}) / ${teamOne.playerTwo.fullName} (${teamOne.playerTwo.countryCode}) vs ${teamTwo.playerOne.fullName} (${teamTwo.playerOne.countryCode}) / ${teamTwo.playerTwo.fullName} (${teamTwo.playerTwo.countryCode}) / ${message} `}
            </Message>
          </div>
        ))}
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
          Copy all
        </button>
      </section>
    );
  } else {
    return (
      <section
        css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          padding-bottom: 3em;
        `}
      >
        {messages.map((message) => (
          <div
            css={css`
              grid-column: 3 / span 8;
              @media screen and (max-width: 768px) {
                grid-column: 2 / span 10;
              }
            `}
          >
            <Message>
              {`${courtName} / ${teamOne.playerOne.fullName} (${teamOne.playerOne.countryCode}) vs ${teamTwo.playerOne.fullName} (${teamTwo.playerOne.countryCode}) / ${message} `}
            </Message>
          </div>
        ))}
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
          Copy all
        </button>
      </section>
    );
  }
}
