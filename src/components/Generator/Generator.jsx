import Form from "./Form";
import Output from "./Output";
import { useState } from "react";

export default function Generator({ handleUTR, handleDoubles }) {
  const [courtName, setCourtName] = useState("C1");
  const [teamOne, setTeamOne] = useState({
    playerOne: {
      fullName: "xyz",
      countryCode: "POL",
    },
    playerTwo: null,
  });

  const [teamTwo, setTeamTwo] = useState({
    playerOne: {
      fullName: "abc",
      countryCode: "GER",
    },
    playerTwo: null,
  });

  if (handleDoubles) {
    if (
      courtName &&
      teamOne.playerOne &&
      teamOne.playerTwo &&
      teamTwo.playerOne &&
      teamTwo.playerTwo
    ) {
      return (
        <main>
          <Form
            setCourtName={setCourtName}
            setTeamOne={setTeamOne}
            setTeamTwo={setTeamTwo}
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
    if (courtName && teamOne.playerOne && teamTwo.playerOne) {
      return (
        <main>
          <Form
            setCourtName={setCourtName}
            setTeamOne={setTeamOne}
            setTeamTwo={setTeamTwo}
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
        setCourtName={setCourtName}
        setTeamOne={setTeamOne}
        setTeamTwo={setTeamTwo}
        handleDoubles={handleDoubles}
      />
    </main>
  );
}
