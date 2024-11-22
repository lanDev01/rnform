import { View, Text, TextInput, type TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Controller, type UseControllerProps } from "react-hook-form";
import { clsx } from "clsx";

import { styles } from "./styles";
import { forwardRef } from "react";

type Props = {
  error: string;
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props>(
  ({ error = "", icon, formProps, inputProps }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <View style={styles.icon}>
                <Feather
                  name={icon}
                  size={24}
                  color={clsx({
                    "#DC1637": error.length > 0,
                    "#8257E5": error.length === 0 && field.value,
                    "#999": !field.value && error.length === 0,
                  })}
                />
              </View>

              <TextInput
                style={styles.control}
                value={field.value}
                onChangeText={field.onChange}
                ref={ref}
                {...inputProps}
              />
            </View>

            {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
