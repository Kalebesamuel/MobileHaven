const CodeExamplesStateManagement = {
  installLibs: `yarn add @tanstack/react-query zustand @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client`,
  reactQueryConfigStart: `
  import { QueryClient } from "@tanstack/react-query";
  import { mmkvStorage } from "./mmkv-config";
  import { persistQueryClient } from "@tanstack/react-query-persist-client";
  import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
  
  const persistor = createSyncStoragePersister({
      storage: {
          setItem: (key, value) => mmkvStorage.set(key, value),
          getItem: key => mmkvStorage.getString(key) || null,
          removeItem: key => mmkvStorage.delete(key),
      },
  });
  
  const queryClient = new QueryClient({
      defaultOptions: {
          queries: {
              // Adjust query behavior as needed
              staleTime: 1000 * 60 * 5, // 5 minutes
          },
      },
  });
  
  persistQueryClient({
      queryClient,
      persistor,
      maxAge: 0,
  });
  
  export { queryClient };
`,
addQueryClientProvider: `
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/lib/react-query';

export default function App() {
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
reactQueryStoreParams: `
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos: evita refetch automático
      cacheTime: 1000 * 60 * 10, // 10 minutos: mantém dados na memória
    },
  },
});

persistQueryClient({
  queryClient,
  persistor: createMMKVStoragePersister(),
  maxAge: 1000 * 60 * 60 * 24, // 1 dia: persiste dados entre sessões
});
`,
zustandStartConfig: `
import { create } from "zustand";

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
`,
zustandWithMMKV: `
import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { storage } from './mmkv';

interface CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({ // -- Dentro do set podemos fazer funções mais complexas
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage', // -- Esse nome é apenas pra debugging
      getStorage: () => ({ // -- configurado uma única vez por store
        getItem: (key) => storage.getString(key) || null,
        setItem: (key, value) => storage.set(key, value),
        removeItem: (key) => storage.delete(key),
      }),
    }
  )
);

interface UserState {
  users: { id: string; name: string }[];
  addUser: (user: { id: string; name: string }) => void;
  updateUser: (id: string, name: string) => void;
  removeUser: (id: string) => void;
}

// -- Exemplo de CRUD
export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, name) => 
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, name } : user
      ),
    })),
  removeUser: (id) =>
  set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),  
}));
`
};

export { CodeExamplesStateManagement };
