import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl, View } from "react-native";
import { useRouter } from "expo-router";
import getDefaultMatchScoutingSession, {
  Match,
  MatchScoutingSession,
  Team,
} from "@/constants/Types";
import ContainerGroup from "@/app/components/ContainerGroup";
import ScoutingMatchSelect from "@/app/components/ScoutingMatchSelect";
import * as Database from "@/app/helpers/database";

function IndexScreen() {
  const router = useRouter();
  const [isRefeshing, setIsRefreshing] = useState<boolean>(false);
  const [eventMatches, setEventMatches] = useState<Array<Match>>([]);
  const [eventTeams, setEventTeams] = useState<Array<Team>>([]);

  const loadData = async () => {
    try {
      // Load data from database.
      const dtoMatches = await Database.getMatches();
      const dtoTeams = await Database.getTeams();

      // Validate.
      if (dtoMatches === undefined) return;
      if (dtoTeams === undefined) return;

      // Set State.
      setEventMatches(await Database.getMatches());
      setEventTeams(await Database.getTeams());
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    loadData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setEventMatches(await Database.getMatches());
      setEventTeams(await Database.getTeams());
    };
    loadData();
  }, []);

  const handleOnSelect = async (
    matchKey: string,
    alliance: string,
    allianceTeam: number,
    teamKey: string
  ) => {
    try {
      // Initialize the Match Scouting Session properties.
      const dtoEvent = await Database.getEvent();
      const match = eventMatches.find((match: Match) => match.key === matchKey);

      if (dtoEvent == undefined) return;
      if (match == undefined) return;

      // Attempt to retrieve existing session.
      let sessionKey = `${dtoEvent.key}__${matchKey}__${alliance}__${allianceTeam}`;
      let session = await Database.getMatchScoutingSession(sessionKey);
      if (session === undefined) {
        session = getDefaultMatchScoutingSession() as MatchScoutingSession;
        session.key = sessionKey;
        session.matchKey = matchKey;
        session.matchNumber = match.matchNumber;
        session.alliance = alliance;
        session.allianceTeam = allianceTeam;
        session.scheduledTeamKey = teamKey;
        session.scoutedTeamKey = teamKey;
      }

      // Save to DB
      await Database.saveMatchScoutingSession(session);

      router.replace(`/scout-match/confirm/${sessionKey}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={isRefeshing} onRefresh={onRefresh} />
        }
      >
        {eventMatches.map((match, index) => (
          <ContainerGroup title="" key={match.key}>
            <ScoutingMatchSelect
              match={match}
              eventTeams={eventTeams}
              onSelect={(matchKey, alliance, allianceTeam, teamKey) =>
                handleOnSelect(matchKey, alliance, allianceTeam, teamKey)
              }
            />
          </ContainerGroup>
        ))}
      </ScrollView>
    </View>
  );
}

export default IndexScreen;
