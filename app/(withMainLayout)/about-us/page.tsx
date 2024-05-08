'use client'

import {persist, createJSONStorage} from 'zustand/middleware';
import {create} from "zustand";

const useLoadingStore = create(
    persist<{
        isLoading: boolean;
        setLoading: (isLoading: boolean) => void;
    }>(
        (set) => ({
            isLoading: true,
            setLoading: (isLoading: boolean) => set({isLoading}),
        }),
        {
            name: 'loading-state', // Unique name for the item in storage
            storage: createJSONStorage(() => sessionStorage), // Use localStorage (you can customize this)
        }
    )
);
export default function AboutUsPage() {
    const {isLoading, setLoading} = useLoadingStore();

    return (<div>
        <div>
            status {isLoading ? "loading" : "notLoading"}
        </div>
        <button onClick={() => {
            setLoading(!isLoading);
        }}>Change Status
        </button>
    </div>)
}