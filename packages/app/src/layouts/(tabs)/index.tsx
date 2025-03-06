import { type Href, Slot, usePathname, useRouter } from "expo-router";
import { useCallback } from "react";
import { NavigationBar } from "ui/NavigationBar";
import { MessageCircle, Settings } from "ui/icons";

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  // パス名からアクティブなタブの値を取得
  const getActiveTabValue = () => {
    if (pathname.includes("/chat")) return "chat";
    return "home"; // デフォルトはホーム
  };

  const onValueChange = useCallback(
    (value: string) => {
      router.push(value as Href);
    },
    [router],
  );

  return (
    <>
      <Slot />
      <NavigationBar
        items={[
          {
            value: "/messages",
            icon: <MessageCircle size={24} color="$onSurfaceVariant" />,
            activeIcon: <MessageCircle size={24} color="$primary" />,
            label: "チャット",
          },
          {
            value: "/settings",
            icon: <Settings size={24} color="$onSurfaceVariant" />,
            activeIcon: <Settings size={24} color="$primary" />,
            label: "設定",
          },
        ]}
        onValueChange={onValueChange}
        defaultValue={getActiveTabValue()}
      />
    </>
  );
}
