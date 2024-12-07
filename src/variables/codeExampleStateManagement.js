const CodeExamplesStateManagement = {
  installLibs: `yarn add @tanstack/react-query zustand`,
  reactQueryConfigStart: `
  import { QueryClient } from '@tanstack/react-query';
  import { storage } from './mmkv';
  import { createAsyncStoragePersistor } from '@tanstack/query-async-storage-persister';
  import { persistQueryClient } from '@tanstack/react-query-persist-client';

  const queryClient = new QueryClient();

  export const setupReactQuery = () => {
    const persistor = createSyncStoragePersister({
      storage: {
        setItem: (key, value) => storage.set(key, value),
        getItem: (key) => storage.getString(key) || null,
        removeItem: (key) => storage.delete(key),
      },
    });

    persistQueryClient({
      queryClient,
      persistor,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    });
  };

  export { queryClient };
`,
addQueryClientProvider: `
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient, setupReactQuery } from './src/lib/react-query';

export default function App() {
  setupReactQuery(); // Configure para suporte offline

  return (
    <QueryClientProvider client={queryClient}>
      {/* Restante da sua aplicação */}
    </QueryClientProvider>
  );
}
`,
reactQuerybasicUse: `
  import { useQuery } from '@tanstack/react-query';
  import axios from 'axios';

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  };

  export const usePosts = () => {
    return useQuery(['posts'], fetchPosts);
  };

  // Em um componente:
  import React from 'react';
  import { Text, View, FlatList } from 'react-native';
  import { usePosts } from './usePosts';

  export const PostsScreen = () => {
    const { data, isLoading, isError } = usePosts();

    if (isLoading) return <Text>Carregando...</Text>;
    if (isError) return <Text>Erro ao carregar dados.</Text>;

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    );
  };
`,
zustandStartConfig: `
import create from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));
`,
zustandBasicUse: `
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useStore } from './src/store/useStore';

export const SettingsScreen = () => {
  const { theme, setTheme } = useStore();

  return (
    <View>
      <Text>Tema atual: {theme}</Text>
      <Button title="Alternar Tema" onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    </View>
  );
};
`,
zustandOffline: `
interface UserState {
  users: { id: string; name: string }[];
  addUser: (user: { id: string; name: string }) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));

// Em um componente:
import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { useUserStore } from './src/store/useStore';

export const UserScreen = () => {
  const { users, addUser } = useUserStore();

  return (
    <View>
      <Button
        title="Adicionar Usuário"
        onPress={() => addUser({ id: '${Date.now()}', name: 'Novo Usuário' })}
      />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
`
};

export { CodeExamplesStateManagement };
