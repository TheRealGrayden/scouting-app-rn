import { StyleSheet } from "react-native";
import colors from "@/themes/colors";

// TBD
// [ ] Theme for option button selected/unselected
// [ ] Theme for action button enabled/disabled
// [ ] Theme for TextInput
// [ ] Theme for Alliance button blue/red

export default StyleSheet.create({
  app: {
    backgroundColor: colors.appBackground,
    flex: 1,
    padding: 20,
  },
  containerGroup: {
    backgroundColor: colors.containerBackground,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },
  inputGroup: {
    backgroundColor: colors.containerBackground,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },
  containerGroupTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  minusPlusButton: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    color: "white",
    fontWeight: "900",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 50,
  },
  labelText: {
    fontSize: 20,
  },

  allianceBlueButton: {
    borderRadius: 8,
    backgroundColor: colors.allianceBlue,
    fontWeight: "900",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  allianceRedButton: {
    borderRadius: 8,
    backgroundColor: colors.allianceRed,
    fontWeight: "900",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "darkgray",
  },
});
