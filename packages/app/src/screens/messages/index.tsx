import { Typography } from "@codynog/rn-ui";
import { Link } from "expo-router";

export default function MessagesScreen() {
  return (
    <>
      <Link href="/messages/1">
        <Typography>メッセージ</Typography>
      </Link>
    </>
  );
}
