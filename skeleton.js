/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://snu-web-random-chat.herokuapp.com';

class ChatMessage {
  constructor(userName, message, createdAt) {
    this.message = message;
    this.userName = userName;
    this.createdAt = createdAt;
  }

  print() {
    return (
      <div style={{ border: '1px solid black' }}>
        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>{this.userName}</span>
        <span>
          {this.message}
        </span>
        <span style={{ float: 'right' }}>{this.createdAt}</span>
        </div>
    );
  }
}

export default function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState(null);
  const onLogin = (e) => {
    e.preventDefault();
    if (!name) {
      return alert('input your name');
    }
    fetch(`${API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Authorization: `Key ${localStorage.getItem('__key')}`,
      },
      body: `name=${name}`,
    })
      .then((response) => response.json())
      .then(({ key }) => {
        console.log(key);
        if (key) localStorage.setItem('__key', key);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetch(`${API_ENDPOINT}/chats`)
      .then((res) => res.json())
      .then((messages) => {
        console.log(messages[messages.length - 1]);
        setMessageList(
          messages.map((message) => new ChatMessage(message.user.name, message.message, message.createdAt)),
        );
      });
  }, []);

  return (
    <div>
      Chat program.
      <form onSubmit={onLogin}>
        <input type="text" name="name" placeholder="type your name" onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="login" />
      </form>
      <div className="chatList" style={{ padding: '20px' }}>
        {messageList.map((message) => message.print())}
      </div>
    </div>
  );
}
