import FontAwesome from "@expo/vector-icons/FontAwesome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { ConvexAppProvider } from "packages/shared/libs/convex/provider";
import type { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { I18nProvider } from "shared/libs/i18n";
import { UIProvider } from "ui";

type ProvidersProps = {
  children: ReactNode;
  locale?: string;
};

const client = new QueryClient();

const useProviders = () => {
  const colorScheme = useColorScheme();
  // フォントの読み込みを簡略化
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  return { loaded, theme: colorScheme || undefined };
};

const KEY_COLOR = "#006493";

export const Providers = ({ children, locale }: ProvidersProps) => {
  const { loaded } = useProviders();

  // フォントが読み込まれるまで何も表示しないか、ローディング表示を出す
  // ここでは一旦、読み込み完了後に子要素を表示するようにするね
  return (
    <ConvexAppProvider>
      <UIProvider keyColor={KEY_COLOR}>
        <I18nProvider locale={locale}>
          <QueryClientProvider client={client}>
            {loaded ? children : null}
          </QueryClientProvider>
        </I18nProvider>
      </UIProvider>
    </ConvexAppProvider>
  );
};
