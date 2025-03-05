import { useRef } from "react";
import { KeyboardAvoidingView, Platform, type TextInput } from "react-native";
import { Chat } from "ui/Chat";
import { useChatScreen } from "./hooks";

const Screen = () => {
  const { messages, inputValue, setInputValue, handleSendMessage, isLoading } =
    useChatScreen();
  const inputRef = useRef<TextInput>(null);

  return (
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
  );
};

export default Screen;
