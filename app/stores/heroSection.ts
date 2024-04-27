import {create} from 'zustand'

interface heroSectionState {
    visible: boolean
    updateVisibility: (visible: boolean) => void
}


export const useHeroSectionStore = create<heroSectionState>((set) => ({
    visible: false,
    updateVisibility: (visible) => set(() => ({visible}))
}))
