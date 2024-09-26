"use client";

import React, { useState } from "react";
import ChatMessages from "./ChatMessages";

const ChatWidget: React.FC = () => {
	const [isOnline, setIsOnline] = useState(false);

	const toggleChat = () => {
		setIsOnline(!isOnline);
	};

	return (
		<div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
			<button
				className="chat-button"
				title={isOnline ? "Close chat" : "Message us"}
				aria-label={isOnline ? "Close chat" : "Message us"}
				onClick={toggleChat}
				style={{
					backgroundColor: "rgb(13, 14, 129)",
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					border: "none",
					cursor: "pointer",
				}}
			>
				<image xlinkHref="/image/Chat-icon-bubble.svg"
					className="chat-icon"
					width="35px"
					height="35px"
				/>
				
			</button>
			{isOnline && <ChatMessages onClose={toggleChat} />}
		</div>
	);
};



export default ChatWidget;
