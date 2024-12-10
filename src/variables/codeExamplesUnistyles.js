const codeExamplesUnistyles = {
  installation: `yarn add react-native-unistyles@beta
yarn add react-native-nitro-modules react-native-edge-to-edge`,

//--------------------------------------------
  babel: `module.exports = function (api) {
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

};

export { codeExamplesUnistyles };