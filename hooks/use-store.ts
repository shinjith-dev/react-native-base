import { create } from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BearState {
  bears: number
  increase: () => void
}

export const useStore = create<BearState>()(persist((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}),{name:'bear',
        storage: createJSONStorage(() => AsyncStorage),}))
