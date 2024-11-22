import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type InputProps = {
  icon: keyof typeof Feather.glyphMap;
};

export function Input({ icon }: InputProps) {
  return (
    <View style={styles.group}>
      <View style={styles.icon}>
        <Feather name={icon} size={24} color="red" />
      </View>
      <TextInput style={styles.control} />
    </View>
  );
}
