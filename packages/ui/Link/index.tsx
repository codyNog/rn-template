import { Link as LinkPrimitive, type LinkProps } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { Platform } from "react-native";

type Props = Omit<LinkProps, "href"> & {
  href: string;
  external?: boolean;
};

export const Link = ({ external, href, ...rest }: Props) => {
  if (external) {
    return (
      <Link
        target="_blank"
        {...rest}
        href={href}
        onPress={async (event) => {
          if (Platform.OS !== "web") {
            // Prevent the default behavior of linking to the default browser on native.
            event.preventDefault();
            // Open the link in an in-app browser.
            await openBrowserAsync(href);
          }
        }}
      />
    );
  }

  return <LinkPrimitive {...rest} href={href} />;
};
