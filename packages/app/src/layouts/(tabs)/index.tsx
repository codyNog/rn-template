import { AppLayout } from "ui/AppLayout";
import { Slot, useRouter, usePathname } from "expo-router";
import { NavigationBar } from "ui/NavigationBar";
import { Home, Menu, MessageCircle } from "ui/icons";
import { TopAppBar } from "ui/TopAppBar";

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  // パス名からアクティブなタブの値を取得
  const getActiveTabValue = () => {
    if (pathname.includes("/chat")) return "chat";
    return "home"; // デフォルトはホーム
  };

  return (
    <AppLayout
      navigationBar={
        <NavigationBar
          items={[
            {
              icon: <Home size={24} color="$onSurfaceVariant" />,
              activeIcon: <Home size={24} color="$primary" />,
              label: "ホーム",
              value: "home",
            },
            {
              icon: <MessageCircle size={24} color="$onSurfaceVariant" />,
              activeIcon: <MessageCircle size={24} color="$primary" />,
              label: "チャット",
              value: "chat",
            },
          ]}
          defaultValue={getActiveTabValue()}
          onValueChange={(value) => {
            // 値に基づいて適切なルートに移動
            switch (value) {
              case "chat":
                router.push("/chat");
                break;
              default:
                router.push("/");
                break;
            }
          }}
        />
      }
    >
      <Slot />
    </AppLayout>
  );
}
