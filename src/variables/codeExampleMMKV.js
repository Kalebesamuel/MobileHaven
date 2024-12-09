const CodeExamplesMMKV = {
  installLibs: `yarn add react-native-mmkv`,
  mmkvPuglin: `
{
  "expo": {
    "plugins": [
      "react-native-mmkv"
    ]
  }
}
`,
easBuild: `
eas build
`,
basicConfig: `
import { MMKV } from 'react-native-mmkv';

...

const storage = new MMKV({
  id: 'my-app-storage', // Identificador único para seu armazenamento
  encryptionKey: 'my-encryption-key', // (Opcional) chave de criptografia
});
`,
MMKVOperations: `
storage.set('username', 'JohnDoe'); // Salvar
const username = storage.getString('username'); // Retorna 'JohnDoe'
storage.delete('username'); // Deletar
const exists = storage.contains('username'); // -- Verifica se existe um valor (Retorna true ou false)
`,
storeObjects: `
const user = { id: 1, name: 'John' };
storage.set('user', JSON.stringify(user));

// Recuperar
const userData = JSON.parse(storage.getString('user'));
console.log(userData.name); // 'John'
`,
multipleStorage: `
const userStorage = new MMKV({ id: 'user-storage' });
const appStorage = new MMKV({ id: 'app-storage' });

userStorage.set('token', 'abc123');
appStorage.set('theme', 'dark');
`,
resetAll: `
storage.clearAll();
`
};

export { CodeExamplesMMKV };
