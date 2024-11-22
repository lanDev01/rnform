import { View, TextInput, type TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Controller, type UseControllerProps } from "react-hook-form";

import { styles } from "./styles";
import { forwardRef } from "react";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props>(
  ({ icon, formProps, inputProps }, ref) => {
    return (
      <Controller
        render={() => (
          <View style={styles.group}>
            <View style={styles.icon}>
              <Feather name={icon} size={24} color="red" />
            </View>
            <TextInput style={styles.control} {...inputProps} ref={ref} />
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
