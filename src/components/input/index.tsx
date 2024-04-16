import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

function Input({ children }: { children: ReactNode }) {
  return <View style={styles.input}>{children}</View>;
}

function Field({ ...props }: TextInputProps) {
  return <TextInput style={styles.field} {...props} />;
}

Input.Field = Field;

export { Input };
