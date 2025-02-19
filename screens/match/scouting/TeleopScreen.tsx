import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import MatchScoutingHeader from "@/components/MatchScoutingHeader";
import ContainerGroup from "@/components/ContainerGroup";
import MinusPlusPair from "@/components/MinusPlusPair";

export default function TeleopScreen() {
  // Support for Speaker Score Non-Amplified
  const [speakerScore, setSpeakerScore] = useState(0);
  const handleSpeakerScore = (delta: number) => {
    setSpeakerScore((prev) => (prev += delta));
  };

  // SUpport for Speaker Score Amplified
  const [speakerScoreAmplified, setSpeakerScoreAmplified] = useState(0);
  const handleSpeakerScoreAmplified = (delta: number) => {
    setSpeakerScoreAmplified((prev) => (prev += delta));
  };

  // Support for Speaker Miss
  const [speakerMiss, setSpeakerMiss] = useState(0);
  const handleSpeakerMiss = (delta: number) => {
    setSpeakerMiss((prev) => (prev += delta));
  };

  // Support for Amp Score
  const [ampScore, setAmpScore] = useState(0);
  const handleAmpScore = (delta: number) => {
    setAmpScore((prev) => (prev += delta));
  };

  // Support for Amp Miss
  const [ampMiss, setAmpMiss] = useState(0);
  const handleAmpMiss = (delta: number) => {
    setAmpMiss((prev) => (prev += delta));
  };

  // Support for Pass
  const [pass, setPass] = useState(0);
  const handlePass = (delta: number) => {
    setPass((prev) => (prev += delta));
  };

  useEffect(() => {
    console.log("Teleop: Update the session");
  }, [
    speakerScore,
    speakerScoreAmplified,
    speakerMiss,
    ampScore,
    ampMiss,
    pass,
  ]);

  return (
    <ScrollView style={{ margin: 10 }}>
      <MatchScoutingHeader />
      <ContainerGroup title="Speaker">
        <MinusPlusPair
          label="Score: Non-Amplified"
          count={speakerScore}
          onChange={handleSpeakerScore}
        />
        <MinusPlusPair
          label="Score: Amplified"
          count={speakerScoreAmplified}
          onChange={handleSpeakerScoreAmplified}
        />
        <MinusPlusPair
          label="Miss"
          count={speakerMiss}
          onChange={handleSpeakerMiss}
        />
      </ContainerGroup>
      <ContainerGroup title="Amp">
        <MinusPlusPair
          label="Score"
          count={ampScore}
          onChange={handleAmpScore}
        />
        <MinusPlusPair label="Miss" count={ampMiss} onChange={handleAmpMiss} />
      </ContainerGroup>
      <ContainerGroup title="Relay">
        <MinusPlusPair label="Passes" count={pass} onChange={handlePass} />
      </ContainerGroup>
    </ScrollView>
  );
}
