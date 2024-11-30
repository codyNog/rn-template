import { useToastController } from "@tamagui/toast";

export const useToast = ({ isNative }: { isNative: boolean }) => {
  const toast = useToastController();

  return { toast };
};

export { Toast } from "@tamagui/toast";
