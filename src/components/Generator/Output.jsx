import { css } from "@emotion/react";

import Message from "./Message";
import messsageTemplates from "../../utils/messages";
import { useRef } from "react";

export default function Output({
  courtName,
  teamOne,
  teamTwo,
  handleUTR,
  handleDoubles,
}) {
  const messagesRef = useRef([]);

  function handleCopyAll(refsArray) {
    let toCopy = "";
    const { current } = refsArray;
    current.forEach((ref) => {
      toCopy += ref.innerText.slice(0, -4);
    });
    navigator.clipboard.writeText(toCopy);
  }

  const messages = handleUTR
    ? messsageTemplates.utrMessages
    : messsageTemplates.defaultMessages;

  if (handleDoubles) {
    return (
      <section
        css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          padding-bottom: 3em;
        `}
      >
        <button
          css={css`
            margin: 0 auto 1em auto;
            grid-column: 6 / span 2;
            font-size: clamp(10px, 1.2vw, 16px);
            background-color: var(--background-primary);
            color: var(--text-primary);
            text-transform: uppercase;
            padding: 0.5em 1.5em;
            border-radius: 1em;
            font-weight: 800;
            cursor: pointer;
            transition: all ease 200ms;
            border: 2px solid transparent;

            &:hover {
              padding: 0.5em 3em;
            }

            @media screen and (max-width: 728px) {
              grid-column: 4 / span 6;
            }
          `}
          onClick={() => handleCopyAll(messagesRef)}
        >
          Copy all
        </button>
        {messages.map((message, i) => (
          <div
            key={i}
            ref={(el) => (messagesRef.current[i] = el)}
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
        <button
          css={css`
            margin: 0 auto 1em auto;
            grid-column: 6 / span 2;
            font-size: clamp(10px, 1.2vw, 16px);
            background-color: var(--background-primary);
            color: var(--text-primary);
            text-transform: uppercase;
            padding: 0.5em 1.5em;
            border-radius: 1em;
            font-weight: 800;
            cursor: pointer;
            transition: all ease 200ms;
            border: 2px solid transparent;

            &:hover {
              padding: 0.5em 3em;
            }

            @media screen and (max-width: 728px) {
              grid-column: 4 / span 6;
            }
          `}
          onClick={() => handleCopyAll(messagesRef)}
        >
          Copy all
        </button>
        {messages.map((message, i) => (
          <div
            key={i}
            ref={(el) => (messagesRef.current[i] = el)}
            css={css`
              grid-column: 3 / span 8;
              @media screen and (max-width: 768px) {
                grid-column: 2 / span 10;
              }
            `}
          >
            <Message>
              {`${courtName} / ${teamOne.playerOne.fullName} (${teamOne.playerOne.countryCode}) vs ${teamTwo.playerTwo.fullName} (${teamTwo.playerTwo.countryCode}) / ${message} `}
            </Message>
          </div>
        ))}
      </section>
    );
  }
}
