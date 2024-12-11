const codeExamplesUnistyles = {
  installation: 
`yarn add react-native-unistyles@beta
yarn add react-native-nitro-modules react-native-edge-to-edge`,

//--------------------------------------------
  babel: 
`module.exports = function (api) {
  api.cache(true)

  return {
    // Outras configurações
    plugins: [
        // Outros plugins
        ['react-native-unistyles/plugin']
    ]
  }
}`,

//--------------------------------------------
  projectStructure: 
`src/
├── components/
└── libs/
    └── unistyles/
        ├── theme/
        │   ├── dark.ts
        │   ├── light.ts
        │   └── index.ts
        ├── tokens/
        │   ├── breakpoints.ts
        │   ├── dark_colors.ts
        │   ├── fonts.ts
        │   ├── light_colors.ts
        │   └── theme_colors.d.ts // Interface com a tipagem dos temas
        └── index.ts`,

//--------------------------------------------
  theme_colors:
`export interface ThemeColors {
  background: string
  shape: string
  text: string
  primary: string
}`,

//--------------------------------------------
  dark_colors:
`import { ThemeColors } from "./theme_colors"

export const darkColors: ThemeColors = {
  background: "#151718",
  shape: "#1B1D1E",
  text: "#FFFFFF",
  primary: "#369EFF",
}`,

//--------------------------------------------
  light_colors:
`import { ThemeColors } from "./theme_colors"

export const lightColors: ThemeColors = {
  background: "#FFFFFF",
  shape: "#CECECE",
  text: "#000000",
  primary: "#369EFF",
}`,

//--------------------------------------------
  fonts:
`export const fonts = {
  primary: {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
    extraBold: "Roboto-ExtraBold",
  },

  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 22,
  }
} as const`,

//--------------------------------------------
  breakpoints:
`export const breakpoints = {
  xs: 0,
  sm: 320,
  md: 576,
  lg: 768,
  xl: 992,
} as const`,

//--------------------------------------------
  dark:
`import { darkColors } from "../tokens/dark_colors"
import { fonts } from "../tokens/fonts"

export const dark = {
  colors: darkColors,
  fonts,
} as const`,

//--------------------------------------------
  light:
`import { lightColors } from "../tokens/light_colors"
import { fonts } from "../tokens/fonts"

export const light = {
  colors: lightColors,
  fonts,
} as const`,

//--------------------------------------------
  themeIndex:
`import { dark } from "./dark"
import { light } from "./light"

export { dark, light }`,

//--------------------------------------------
  unistylesIndex:
`import { StyleSheet } from "react-native-unistyles"

import { dark, light } from "./theme"
import { breakpoints } from "./tokens/breakpoints"

type AppBreakpoints = typeof breakpoints

interface AppThemes {
  light: typeof light
  dark: typeof dark
}

// Se o projeto estiver usando TypeScript, recomenda-se fortemente
// substituir os tipos da biblioteca para obter um autocomplete mais
// preciso e garantir a segurança de tipo em seus temas e breakpoints:

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
    themes: {
        light: light,
        dark: dark
    },
    
    breakpoints: breakpoints,

    settings: {
        // Deixe essa opção como true para ativar o suporte a temas adaptativos
        // (pega o tema do sistema)
        adaptiveThemes: true,

        // Caso queira que o usuário possa escolher o tema, independente do tema
        // do sistema o adaptiveThemes deve ser false e o tema padrão deve ser
        // setado aqui:
        initialTheme: "light"

        // A propriedade initialTheme também aceita uma função que retorna o tema inicial
        initialTheme: () =>  {
            return storage.getString('preferredTheme') ?? 'light'
        }
    }
})`,

//--------------------------------------------
  changeTheme:
`import { UnistylesRuntime } from 'react-native-unistyles'

// Mude o tema em qualquer lugar do seu código
export const ChangeTheme = () => (
    <Button
        title="Mudar tema"
        onPress={() => {
          // Retorna a preferência do tema do dispositivo atual
          // UnistylesRuntime.colorScheme

          // Retorna o nome do tema atual da aplicação
          // UnistylesRuntime.themeName

          UnistylesRuntime.themeName === 'light'
            ? UnistylesRuntime.setTheme('dark')
            : UnistylesRuntime.setTheme('light')
        }}
    />
)`,

//--------------------------------------------
  usage:
`import { StyleSheet } from 'react-native-unistyles'

const styles = StyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.background
    }
}))`,

//--------------------------------------------

//--------------------------------------------

//--------------------------------------------

//--------------------------------------------

//--------------------------------------------

//--------------------------------------------

//--------------------------------------------
};

export { codeExamplesUnistyles };