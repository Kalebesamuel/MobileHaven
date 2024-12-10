const CodeExamplesForms = {
  install: `npm install react-hook-form zod @hookform/resolvers`,
  basicStructure: `
  src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Typography.tsx
│   │   ├── Spacer.tsx
│   │   └── ErrorMessage.tsx
│   ├── molecules/
│   │   ├── FormField.tsx
│   │   └── FormButton.tsx
│   ├── organisms/
│   │   ├── FormProvider.tsx
│   │   └── Form.tsx
│   ├── templates/
│   │   └── ExampleFormTemplate.tsx
│   ├── pages/
│   │   └── ExampleFormScreen.tsx
├── schemas/
│   └── formSchema.ts
├── theme/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
  `,
  formSchema: `
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres.")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula."),
});

export type FormSchema = z.infer<typeof formSchema>;
  `,
  formProvider: `
import React from "react";
import { FormProvider as RHFormProvider, UseFormReturn } from "react-hook-form";

interface FormProviderProps {
  methods: UseFormReturn<any>;
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  methods,
  children,
  onSubmit,
}) => {
  return (
    <RHFormProvider {...methods}>
      <form
        style={{ flex: 1 }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </RHFormProvider>
  );
};
  `,
  input: `
import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});
  `,
  errorMessage: `
import React from "react";
import { Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
  `,
  formField: `
  import React from "react";
  import { View, StyleSheet } from "react-native";
  import { useFormContext, Controller } from "react-hook-form";
  import { Input } from "../atoms/Input";
  import { ErrorMessage } from "../atoms/ErrorMessage";
  
  interface FormFieldProps {
    name: string; // Field name for react-hook-form
    placeholder?: string;
    secureTextEntry?: boolean;
  }
  
  export const FormField: React.FC<FormFieldProps> = ({
    name,
    placeholder,
    secureTextEntry,
  }) => {
    const { control } = useFormContext();
  
    return (
      <View style={styles.container}>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Input
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
              <ErrorMessage message={error?.message} />
            </>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
  });  
  `,
  form: `
  import React from "react";
  import { View, Button } from "react-native";
  import { useForm } from "react-hook-form";
  import { FormProvider } from "../../context/FormProvider";
  import { FormField } from "../molecules/FormField";
  
  interface FormValues {
    email: string;
    password: string;
  }
  
  export const Form: React.FC = () => {
    const methods = useForm<FormValues>({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const onSubmit = (data: FormValues) => {
      console.log("Submitted Data:", data);
    };
  
    return (
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <View>
          <FormField name="email" placeholder="E-mail" />
          <FormField name="password" placeholder="Senha" secureTextEntry />
          <Button title="Enviar" onPress={methods.handleSubmit(onSubmit)} />
        </View>
      </FormProvider>
    );
  };  
  `,
formTemplate: `
import React from "react";
import { View, StyleSheet } from "react-native";
import { Form } from "../organisms/Form";

export const ExampleFormTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
`,
pages: `
import React from "react";
import { ExampleFormTemplate } from "../templates/ExampleFormTemplate";

export const ExampleFormScreen: React.FC = () => {
  return <ExampleFormTemplate />;
};
`
};

export { CodeExamplesForms };
