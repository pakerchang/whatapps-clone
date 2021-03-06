import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./SidebarChat.css";
function SidebarChats({ id, name, addNewChat }) {
	const [seed, setSeed] = useState("");
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const createChat = () => {
		const roomName = prompt("Please enter name for chat");
		if (roomName) {
			db.collection('rooms').add({
				name: roomName,
				
			})
		}
	};
	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar
				src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
			/>
			<div className="sidebarChat__info">
				<h2>{name}</h2>
				<p>last message...</p>
			</div>
		</div>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h3>開始新聊天</h3>
		</div>
	);
}

export default SidebarChats;
