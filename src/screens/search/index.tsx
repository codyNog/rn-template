import { Typography } from "ui";
import { useSearchScreen } from "./hooks";

const Screen = () => {
  useSearchScreen();
  return <Typography>Screen</Typography>;
};

export default Screen;
