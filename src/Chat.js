import { Avatar, IconButton } from "@material-ui/core";
import {
	AttachFile,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
	const [seed, setSeed] = useState("");
	const [input, setInput] = useState("");
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const sendMessage = (e) => {
		e.preventDefault();
		console.log("typeing input:", input);
		setInput("");
	};
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				/>
				<div className="chat__headerInfo">
					<h3>Room name</h3>
					<p>last seen at ...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				<p
					className={`chat__message ${
						true && "chat__receiver"
					}`}>
					<span className="chat__userName">test 1</span>
					test message
					<span className="chat__timeStamp">07:29</span>
				</p>
			</div>
			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form action="">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="Type a message"
					/>
					<button onClick={sendMessage} type="submit">
						Send
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
