import { Stack, Tabs } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Client = new QueryClient();

export default function RootLayout()
{
    return (
        <QueryClientProvider client={Client}>
        <Stack>
            <Stack.Screen name='index' options={{title: 'Exercises'}}/>
        </Stack>
        </QueryClientProvider>
    );
}