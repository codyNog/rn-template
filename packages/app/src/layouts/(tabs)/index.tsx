import { BottomTabs } from "ui/BottomTabs";
import { IconSymbol } from "ui/IconSymbol";

export default function TabLayout() {
  return (
    <BottomTabs
      screens={[
        {
          name: "index",
          options: {
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          },
        },
      ]}
    />
  );
}
