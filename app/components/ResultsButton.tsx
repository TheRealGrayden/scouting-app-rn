import { Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCloudArrowUp,
  faQrcode,
  faShareFromSquare,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "@/constants/Styles";

interface ResultsButtonProps {
  label: string | "";
  faIcon: "edit" | "upload" | "qr" | "share";
  styles?: {};
  onPress: () => void;
}

const ResultsButton: React.FC<ResultsButtonProps> = ({
  label,
  faIcon,
  styles,
  onPress,
}) => {
  const iconLookup = {
    edit: faEdit,
    upload: faCloudArrowUp,
    qr: faQrcode,
    share: faShareFromSquare,
  };

  return (
    <TouchableOpacity
      style={[
        Styles.baseButton,
        styles,
        { flex: 1, flexDirection: "row", gap: 8 },
      ]}
      onPress={() => onPress()}
    >
      <FontAwesomeIcon
        icon={iconLookup[faIcon]}
        size={32}
        style={{ color: "white" }}
      />
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ResultsButton;
