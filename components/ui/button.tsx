import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";

interface Props extends TouchableOpacityProps {
  children?: string;
  textProps?: TextProps;
  textStyle?: StyleProp<TextStyle>;
}

const buttonStyle = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default function Button({
  children,
  textProps,
  style,
  textStyle,
  ...props
}: Props) {
  const dTextStyle = StyleSheet.compose(buttonStyle.text, textStyle);
  const containerStyle = StyleSheet.compose(buttonStyle.container, style);

  return (
    <TouchableOpacity style={containerStyle} {...props}>
      <Text style={dTextStyle} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
