import { IconSymbol } from "ui/IconSymbol";
import { BottomTabs } from "ui/BottomTabs";

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
