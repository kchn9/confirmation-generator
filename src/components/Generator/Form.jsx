import { css } from "@emotion/react";
import TextInput from "../TextInput";
import PlayerInput from "./PlayerInput";

export default function Form({
  courtName,
  setCourtName,
  setTeamOne,
  teamOne,
  setTeamTwo,
  teamTwo,
  handleDoubles,
}) {
  function handleClear() {
    setCourtName("");
    setTeamOne({
      playerOne: {
        fullName: "",
        countryCode: "",
      },
      playerTwo: {
        fullName: "",
        countryCode: "",
      },
    });
    setTeamTwo({
      playerOne: {
        fullName: "",
        countryCode: "",
      },
      playerTwo: {
        fullName: "",
        countryCode: "",
      },
    });
  }

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
          <TextInput
            value={courtName}
            onChange={(value) => setCourtName(value.toUpperCase())}
            placeholder="Court name"
          />
        </div>

        <div
          css={css`
            grid-column: 3 / span 8;
            @media screen and (max-width: 768px) {
              grid-column: 2 / span 10;
            }
          `}
        >
          {handleDoubles && <h2>Team 1</h2>}
          <PlayerInput
            playerNo={"one"}
            playerFullName={teamOne.playerOne.fullName}
            setPlayerFullName={(value) =>
              setTeamOne((prev) => {
                return {
                  ...prev,
                  playerOne: {
                    ...prev.playerOne,
                    fullName: value,
                  },
                };
              })
            }
            playerCountryCode={teamOne.playerOne.countryCode}
            setPlayerCountryCode={(value) =>
              setTeamOne((prev) => {
                return {
                  ...prev,
                  playerOne: {
                    ...prev.playerOne,
                    countryCode: value,
                  },
                };
              })
            }
          />
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
            <PlayerInput
              playerNo={"two"}
              playerFullName={teamOne.playerTwo.fullName}
              setPlayerFullName={(value) =>
                setTeamOne((prev) => {
                  return {
                    ...prev,
                    playerTwo: {
                      ...prev.playerTwo,
                      fullName: value,
                    },
                  };
                })
              }
              playerCountryCode={teamOne.playerTwo.countryCode}
              setPlayerCountryCode={(value) =>
                setTeamOne((prev) => {
                  return {
                    ...prev,
                    playerTwo: {
                      ...prev.playerTwo,
                      countryCode: value,
                    },
                  };
                })
              }
            />
          </div>
        )}

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

            <PlayerInput
              playerNo={"one"}
              playerFullName={teamTwo.playerOne.fullName}
              setPlayerFullName={(value) =>
                setTeamTwo((prev) => {
                  return {
                    ...prev,
                    playerOne: {
                      ...prev.playerOne,
                      fullName: value,
                    },
                  };
                })
              }
              playerCountryCode={teamTwo.playerOne.countryCode}
              setPlayerCountryCode={(value) =>
                setTeamTwo((prev) => {
                  return {
                    ...prev,
                    playerOne: {
                      ...prev.playerOne,
                      countryCode: value,
                    },
                  };
                })
              }
            />
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
          <PlayerInput
            playerNo={"two"}
            playerFullName={teamTwo.playerTwo.fullName}
            setPlayerFullName={(value) =>
              setTeamTwo((prev) => {
                return {
                  ...prev,
                  playerTwo: {
                    ...prev.playerTwo,
                    fullName: value,
                  },
                };
              })
            }
            playerCountryCode={teamTwo.playerTwo.countryCode}
            setPlayerCountryCode={(value) =>
              setTeamTwo((prev) => {
                return {
                  ...prev,
                  playerTwo: {
                    ...prev.playerTwo,
                    countryCode: value,
                  },
                };
              })
            }
          />
        </div>
        <button
          css={css`
            margin: 1em auto 0 auto;
            grid-column: 6 / span 2;
            font-size: clamp(10px, 1.2vw, 16px);
            background-color: var(--background-primary);
            color: var(--text-primary);
            text-transform: uppercase;
            padding: 0.5em 1.5em;
            border-radius: 1em;
            font-weight: 800;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all ease 200ms;

            &:hover {
              padding: 0.5em 3em;
            }

            @media screen and (max-width: 728px) {
              grid-column: 4 / span 6;
            }
          `}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
