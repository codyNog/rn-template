import { useState, useCallback } from "react";

type Message = {
  id: string;
  text: string;
  type: "sent" | "received";
};

export const useChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "こんにちは！",
      type: "received",
    },
    {
      id: "2",
      text: "何かお手伝いできることはありますか？",
      type: "received",
    },
    {
      id: "3",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "4",
      text: "こんにちは！",
      type: "received",
    },
    {
      id: "5",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "6",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "7",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "8",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "9",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "10",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "11",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "12",
      text: "こんにちは！",
      type: "sent",
    },
    {
      id: "13",
      text: "こんにちは！",
      type: "sent",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      type: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    // 自動返信をシミュレート
    setTimeout(() => {
      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "ありがとうございます。他に何かご質問はありますか？",
        type: "received",
      };
      setMessages((prev) => [...prev, replyMessage]);
      setIsLoading(false);
    }, 1000);
  }, [inputValue]);

  return {
    messages,
    inputValue,
    setInputValue,
    handleSendMessage,
    isLoading,
  };
};
