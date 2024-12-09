import React, { useState } from "react";

interface PostFormProps {
    addPost: (title: string, message: string) => void;
}

export default function PostForm({ addPost }: PostFormProps) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handlePost = () => {
        if (title.trim() && message.trim()) {
            addPost(title, message); // Pass the title and message to the parent
            setTitle("");
            setMessage("");
        }
    };

    return (
        <div className="container mb-4">
            <br />
            <h1 className="fw-bold me-3 mb-0 d-flex align-items-center mb-4">
                Community Forum
            </h1>
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="message">Message / Comments</label>
                <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    placeholder="Enter Message / Comments"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => {
                        setTitle("");
                        setMessage("");
                    }}
                >
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handlePost}>
                    Post
                </button>
            </div>
        </div>
    );
}
