import { View } from "react-native";
import BearCounter from "./_components/bear-counter";
import Controls from "./_components/controls";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BearCounter/>
      <Controls />
    </View>
  );
}
