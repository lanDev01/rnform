import { Text, type TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export function FormStepOne() {
  const { control } = useForm();

  const emailRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta</Text>

      <Input
        formProps={{
          name: "name",
          control,
        }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
        icon="user"
      />

      <Input
        formProps={{
          name: "email",
          control,
        }}
        inputProps={{ placeholder: "E-mail" }}
        icon="mail"
        ref={emailRef}
      />
    </View>
  );
}
