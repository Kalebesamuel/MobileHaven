const CodeExampleHooks = {
  exampleUseEffect: `useEffect(() => {
  console.log('ALERTA: useEffect() chamado');
});`,
  exampleUseState: `const [nome, setNome] = useState('Nome');`,
  exampleUseCallback: `useCallback(() => {
  console.log('ALERTA: useCallback() chamado');
}, [])`,
  exampleUseRef: `const refEffect = useRef(null);`,
  exampleUseReducer: `const [sum, dispatch] = useReducer((state, action) => {
  return state + action;
}, 0);`,
  exampleUseContext: `function Component5() {
  const user = useContext(UserContext);
  
  return (
    <>
    <h1>Component 5</h1>
    <h2>{'Hello |{user} again!'}</h2>
    </>
  );
}`,
};

export { CodeExampleHooks };
