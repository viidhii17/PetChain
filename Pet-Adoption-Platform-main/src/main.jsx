import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router'
import AuthProvider from './components/providers/AuthProvider'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Sepolia } from "@thirdweb-dev/chains";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { StateContextProvider } from './context'

// Create a client
const queryClient = new QueryClient()





ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider activeChain={Sepolia} >
    <StateContextProvider>
  <React.StrictMode>
  <AuthProvider>
 <QueryClientProvider client={queryClient}>
 <RouterProvider router={router} />
 </QueryClientProvider>
  </AuthProvider>
 </React.StrictMode>
 </StateContextProvider>
 </ThirdwebProvider>,
)
