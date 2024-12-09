const CodeExamplesStorybook = {
  install: `npm install -g verdaccio`,
  initServer: `verdaccio`,
  npmrc: `npm set registry http://localhost:4873`,
  projectStructure: `
  design-system/
  src/
  ├── atoms/
  │   ├── Button/
  │   │   ├── Button.tsx
  │   │   ├── Button.stories.tsx
  │   │   └── Button.styles.tsx
  │   ├── Text/
  │   │   ├── Text.tsx
  │   │   ├── Text.stories.tsx
  │   │   └── Text.styles.tsx
  ├── molecules/
  │   └── Card/
  │       ├── Card.tsx
  │       ├── Card.stories.tsx
  │       └── Card.styles.tsx
  ├── package.json
  └── README.md
  `,
  npmPublish: `
  npm publish
  `,
  installAndInitStorybook: `
  npx sb init
  `,
  mainJS: `
  module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
  };
  `,
  addReactNativeWeb: `
  npm install react-native-web react-dom
  `,
  storybookIndex: `
import { AppRegistry } from 'react-native';
import { getStorybookUI } from '@storybook/react-native';
import './rn-addons';

// Carregar stories
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

AppRegistry.registerComponent('StorybookUIRoot', () => StorybookUIRoot);
export default StorybookUIRoot;
  `,
atomicDesignStructure: `
src/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   └── Button.styles.tsx
│   ├── Text/
│   │   ├── Text.tsx
│   │   ├── Text.stories.tsx
│   │   └── Text.styles.tsx
├── molecules/
│   └── Card/
│       ├── Card.tsx
│       ├── Card.stories.tsx
│       └── Card.styles.tsx
...
`,
storyBookExpoConfig: `
expo install react-native-web react-dom @expo/webpack-config
`,
packageJsonScripts: `
"scripts": {
  "start": "expo start",
  "storybook": "expo start --web"
}
`,
runningStorybook: `
npm run storybook
`
};

export { CodeExamplesStorybook };
