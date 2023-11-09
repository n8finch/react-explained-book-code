import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Message from "./components/Message";
import "./App.css";

const App = (props) => {
	const [posts, setPosts] = useLocalStorageState("posts", {
		defaultValue: [],
	});
	const [message, setMessage] = useState(null);

	const setFlashMessage = (message) => {
		setMessage(message);
		setTimeout(() => {
			setMessage(null);
		}, 1600);
	};

	const deletePost = (post) => {
		if (window.confirm("Delete this post?")) {
			const updatedPosts = posts.filter((p) => p.id !== post.id);
			setPosts(updatedPosts);
			setFlashMessage(`deleted`);
		}
	};

	return (
		<div className="App">
			<Header />
			{message && <Message type={message} />}
			<Outlet
				context={{
					postsContext: [posts, setPosts],
					setFlashMessage: setFlashMessage,
					deletePost: deletePost,
				}}
			/>
		</div>
	);
};
export default App;
