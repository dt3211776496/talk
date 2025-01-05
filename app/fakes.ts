"use client";

// TEMP: Fake data
import { $user } from "./stores/user";
import { addMessage } from "./stores/messages";

// Generate 5 random messages
const messages = [
  {
    id: "1",
    username: $user.get().username,
    body: "你好",
    createdAt: "2022-01-01T12:00:00Z",
  },
  {
    id: "2",
    username: "774",
    body: "这个聊天室什么都能发送？没有限制？",
    createdAt: "2022-01-01T12:05:00Z",
  },
  {
    id: "3",
    username: $user.get().username,
    body: "是的 这个聊天室不会存储数据",
    createdAt: "2022-01-01T12:10:00Z",
  },
  {
    id: "4",
    username: $user.get().username,
    body: "并且还是免费的",
    createdAt: "2022-01-01T12:15:00Z",
  },
  {
    id: "5",
    username: "774",
    body: "好啊 哈哈哈哈哈哈",
    createdAt: "2022-01-01T12:20:00Z",
  },
];

// Call this async to avoid hydration errors
setTimeout(() => {
  for (const message of messages) {
    addMessage(message);
  }
}, 1000);
