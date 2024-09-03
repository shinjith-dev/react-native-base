import { useStore } from "@/hooks/use-store";
import { Text } from "react-native";

export default function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <Text>{bears} around here...</Text>;
}
