import { type Href, Link } from "expo-router";
import { Anchor as A, type AnchorProps } from "tamagui";

type Props = AnchorProps;

export const Anchor = (props: Props) => {
  return (
    <Link href={props.href as Href}>
      <A {...props} />
    </Link>
  );
};
