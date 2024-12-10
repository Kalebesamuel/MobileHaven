const CodeExamplesAtomicDesign = {
  ProjectArchitecture: `
src/
└── components/
    ├── atoms/
    │   └── Button.tsx
    │   └── Input.tsx
    │   └── Typography.tsx
    ├── molecules/
    │   └── FormField.tsx
    ├── organisms/
    │   └── LoginForm.tsx
    ├── templates/
    │   └── LoginTemplate.tsx
    ├── pages/
    │   └── LoginPage.tsx
  `,
  typographyAtom: `
import React from "react";
import { Text, StyleSheet, TextProps, TextStyle } from "react-native";

interface TypographyProps extends TextProps {
  variant?: "title" | "subtitle" | "body" | "caption" | "button";
  style?: TextStyle;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  body: {
    fontSize: 16,
    color: "#333",
  },
  caption: {
    fontSize: 12,
    color: "#777",
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
  `,
  buttonAtom: `
  import React from "react";
  import { TouchableOpacity, StyleSheet } from "react-native";
  import { Typography } from "./Typography";
  
  interface ButtonProps {
    label: string;
    onPress: () => void;
  }
  
  export const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Typography variant="button">{label}</Typography>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#007BFF",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
  });  
  `,
  inputAtom: `
  import React from "react";
  import { TextInput, StyleSheet } from "react-native";
  
  interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
  }
  
  export const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
    return (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      marginBottom: 16,
    },
  });  
  `,
  formFieldMolecule:
  `
  import React from "react";
  import { View, StyleSheet } from "react-native";
  import { Input } from "./Input";
  import { Typography } from "./Typography";
  
  interface FormFieldProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
  }
  
  export const FormField: React.FC<FormFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
  }) => {
    return (
      <View style={styles.container}>
        <Typography variant="subtitle">{label}</Typography>
        <Input value={value} onChangeText={onChangeText} placeholder={placeholder} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
  });   
  `,
  loginFormOrganism: `
  import React, { useState } from "react";
  import { View, StyleSheet } from "react-native";
  import { FormField } from "../molecules/FormField";
  import { Button } from "../atoms/Button";
  
  interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
  }
  
  export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={styles.form}>
        <FormField label="Email" value={email} onChangeText={setEmail} placeholder="Enter your email" />
        <FormField label="Password" value={password} onChangeText={setPassword} placeholder="Enter your password" />
        <Button label="Login" onPress={() => onSubmit(email, password)} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    form: {
      padding: 16,
    },
  });  
  `,
  loginTemplate: `
  import React from "react";
  import { View, Text, StyleSheet } from "react-native";
  import { LoginForm } from "../organisms/LoginForm";
  
  interface LoginTemplateProps {
    onSubmit: (email: string, password: string) => void;
  }
  
  export const LoginTemplate: React.FC<LoginTemplateProps> = ({ onSubmit }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <LoginForm onSubmit={onSubmit} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
      backgroundColor: "#f5f5f5",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 24,
    },
  });  
  `,
  loginPage: `
  import React from "react";
  import { LoginTemplate } from "../templates/LoginTemplate";
  
  export const LoginPage: React.FC = () => {
    const handleLogin = (email: string, password: string) => {
      console.log("Email:", email, "Password:", password);
    };
  
    return <LoginTemplate onSubmit={handleLogin} />;
  };  
  `
};

export { CodeExamplesAtomicDesign };
