'use client'
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function QueryProvider({children}){

    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}