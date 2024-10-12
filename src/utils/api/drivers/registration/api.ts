import { message } from "antd";
import { useMutation } from "react-query";
import { assignVehicleForAccount, createAccount, profileAccount, verifyAccount } from ".";
import useSharedStore from "@/store/shared/slice";
import { useNavigate } from "react-router-dom";

export const useCreateAccountMutation = () => {
  const { setIsStep1 } = useSharedStore((state) => state);

  return useMutation(createAccount, {
    onSuccess: () => {
      setIsStep1(true);
    },
    onError: () => {
      message.error("Произошла ошибка во время добавления");
      setIsStep1(false);
    },
  });
};

export const useCreateVerifyAccountMutation = () => {
  const { setRegistrationDriverID, setIsStep2 } = useSharedStore((state) => state);
  return useMutation(verifyAccount, {
    onSuccess: (data) => {
      setRegistrationDriverID(data.data.driver_id);
      setIsStep2(true);
    },
    onError: () => {
      message.error("Произошла ошибка во время подтверждения");
      setIsStep2(false);
    },
  });
};

export const useCreateProfileAccountMutation = () => {
  const { setIsStep3 } = useSharedStore((state) => state);

  return useMutation(profileAccount, {
    onSuccess: () => {
      setIsStep3(true);
    },
    onError: () => {
      message.error("Произошла ошибка во время создания");
      setIsStep3(false);
    },
  });
};

export const useCreateCarForAccountMutation = () => {
  const navigate = useNavigate();

  return useMutation(assignVehicleForAccount, {
    onSuccess: () => {
      message.success("Успешно добавлено");
      navigate("/");
    },
    onError: () => {
      message.error("Произошла ошибка во время создания");
    },
  });
};
