import { create } from "zustand";
import { ISharedStore } from "./types";

const useSharedStore = create<ISharedStore>((set) => ({
  registrationDriverID: "",
  isStep1: false,
  isStep2: false,
  isStep3: false,

  setRegistrationDriverID: (id: string) => set({ registrationDriverID: id }),
  setIsStep1: (value: boolean) => set({ isStep1: value }),
  setIsStep2: (value: boolean) => set({ isStep2: value }),
  setIsStep3: (value: boolean) => set({ isStep3: value }),
}));

export default useSharedStore;
