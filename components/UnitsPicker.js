import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";
import {} from "../utils/index";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),
    top: -20,
    left: 20,
    height: 50,
    width: 100,
  },
});

export default UnitsPicker;
