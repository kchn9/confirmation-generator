import { css } from "@emotion/react";
import TextInput from "../TextInput";

export default function PlayerInput({
  playerNo,
  playerFullName,
  setPlayerFullName,
  playerCountryCode,
  setPlayerCountryCode,
}) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          flex: 3;
        `}
      >
        <TextInput
          value={playerFullName}
          onChange={setPlayerFullName}
          placeholder={`Player ${playerNo} name`}
        />
      </div>

      <div
        css={css`
          flex: 1;
          margin-left: 0.5em;

          @media screen and (max-width: 768px) {
            margin-top: 0.5em;
            margin-left: 0;
          }

          @media screen and (max-width: 425px) {
            margin-top: 0.3em;
          }
        `}
      >
        <TextInput
          value={playerCountryCode}
          onChange={(value) => setPlayerCountryCode(value.toUpperCase())}
          placeholder={`Player ${playerNo} country`}
        />
      </div>
    </div>
  );
}
