import Button from "@/components/ui/button";
import { useStore } from "@/hooks/use-store";

export default function Controls() {
  const increasePopulation = useStore((state) => state.increase);
  return <Button onPress={increasePopulation}>One up</Button>;
}
