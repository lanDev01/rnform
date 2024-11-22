import { useRef } from "react";
import { Text, type TextInput, View } from "react-native";

import { useForm } from "react-hook-form";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { styles } from "./styles";

export function FormStepOne() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleNextStep(data: any) {
    console.log(data);
  }

  const emailRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta</Text>

      <Input
        icon="user"
        error={errors.name?.message}
        formProps={{
          name: "name",
          control,
          rules: {
            required: "Nome é obrigatorio",
          },
        }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
      />

      <Input
        error={errors.email?.message}
        formProps={{
          control,
          name: "email",
          rules: {
            required: "E-mail é obrigatorio",
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/,
              message: "E-mail inválido.",
            },
          },
        }}
        inputProps={{
          placeholder: "E-mail",
          onSubmitEditing: handleSubmit(handleNextStep),
        }}
        icon="mail"
        ref={emailRef}
      />

      <Button title="Enviar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
