import Form from "./Form";
import Output from "./Output";
import { useState } from "react";

function isPlayerFilled(player) {
  return player.fullName && player.countryCode;
}

export default function Generator({ handleUTR, handleDoubles }) {
  const [courtName, setCourtName] = useState("");
  const [teamOne, setTeamOne] = useState({
    playerOne: {
      fullName: "",
      countryCode: "",
    },
    playerTwo: {
      fullName: "",
      countryCode: "",
    },
  });

  const [teamTwo, setTeamTwo] = useState({
    playerOne: {
      fullName: "",
      countryCode: "",
    },
    playerTwo: {
      fullName: "",
      countryCode: "",
    },
  });

  if (handleDoubles) {
    if (
      courtName &&
      isPlayerFilled(teamOne.playerOne) &&
      isPlayerFilled(teamOne.playerTwo) &&
      isPlayerFilled(teamTwo.playerOne) &&
      isPlayerFilled(teamTwo.playerTwo)
    ) {
      return (
        <main>
          <Form
            courtName={courtName}
            setCourtName={setCourtName}
            teamOne={teamOne}
            setTeamOne={setTeamOne}
            setTeamTwo={setTeamTwo}
            teamTwo={teamTwo}
            handleDoubles={handleDoubles}
          />
          <Output
            courtName={courtName}
            teamOne={teamOne}
            teamTwo={teamTwo}
            handleUTR={handleUTR}
            handleDoubles={handleDoubles}
          />
        </main>
      );
    }
  } else {
    if (
      courtName &&
      isPlayerFilled(teamOne.playerOne) &&
      isPlayerFilled(teamTwo.playerTwo)
    ) {
      return (
        <main>
          <Form
            courtName={courtName}
            setCourtName={setCourtName}
            teamOne={teamOne}
            setTeamOne={setTeamOne}
            setTeamTwo={setTeamTwo}
            teamTwo={teamTwo}
            handleDoubles={handleDoubles}
          />
          <Output
            courtName={courtName}
            teamOne={teamOne}
            teamTwo={teamTwo}
            handleUTR={handleUTR}
          />
        </main>
      );
    }
  }

  return (
    <main>
      <Form
        courtName={courtName}
        setCourtName={setCourtName}
        teamOne={teamOne}
        setTeamOne={setTeamOne}
        setTeamTwo={setTeamTwo}
        teamTwo={teamTwo}
        handleDoubles={handleDoubles}
      />
    </main>
  );
}
