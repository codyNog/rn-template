import { Button, Stack, Typography } from "ui";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { UserForm } from "../../../components/UserForm";
import { useUsersIdScreen } from "./hooks";

const Screen = () => {
  const { user, isLoading, isEditing, action } = useUsersIdScreen();
  const router = useRouter();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  if (isEditing) {
    return (
      <UserForm defaultValues={{ ...user, id: user._id }} action={action} />
    );
  }

  return (
    <View>
      <Stack spacing={4} direction="column">
        <Typography>User Details</Typography>
        <Typography>Name: {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>
          Created: {new Date(user.createdAt).toLocaleDateString()}
        </Typography>
        <Typography>
          Updated: {new Date(user.updatedAt).toLocaleDateString()}
        </Typography>
        <Button onPress={() => router.push(`/users/${user._id}?edit=true`)}>
          Edit
        </Button>
      </Stack>
    </View>
  );
};

export default Screen;
