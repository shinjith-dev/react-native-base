import { useStore } from "@/hooks/use-store";
import { TouchableOpacity, Text } from "react-native";

export default function Controls() {
  const increasePopulation = useStore((state) => state.increase);
  return (
    <TouchableOpacity onPress={increasePopulation}>
      <Text>One up</Text>
    </TouchableOpacity>
  );
}
