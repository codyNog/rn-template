import { useRef } from "react";
import { KeyboardAvoidingView, Platform, type TextInput } from "react-native";
import { Chat } from "ui/Chat";
import { useMessagesIdScreen } from "./hooks";
import { TopAppBar } from "ui/TopAppBar";
import { ArrowLeft } from "ui/icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "ui/SafeAreaView";

const Screen = () => {
  const { messages, inputValue, setInputValue, handleSendMessage, isLoading } =
    useMessagesIdScreen();
  const inputRef = useRef<TextInput>(null);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView>
      <TopAppBar
        headline="メッセージ"
        leadingIcon={
          <ArrowLeft color={"$onSurfaceVariant"} onPress={handleBack} />
        }
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <Chat.Wrapper>
          <Chat.Content>
            {messages.map((message) => (
              <Chat.Message key={message.id} type={message.type}>
                {message.text}
              </Chat.Message>
            ))}
          </Chat.Content>
          <Chat.Input
            ref={inputRef}
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSendMessage}
            disabled={isLoading}
          />
        </Chat.Wrapper>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;
