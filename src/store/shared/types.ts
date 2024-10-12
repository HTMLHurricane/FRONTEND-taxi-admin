export interface ISharedStore {
  registrationDriverID: string;
  isStep1: boolean;
  isStep2: boolean;
  isStep3: boolean;
  setRegistrationDriverID: (id: string) => void;
  setIsStep1: (value: boolean) => void;
  setIsStep2: (value: boolean) => void;
  setIsStep3: (value: boolean) => void;
}
