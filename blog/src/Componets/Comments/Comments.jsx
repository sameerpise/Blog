import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Comments= () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Function to handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        comment,
        date: new Date().toLocaleString(),
        likes: 0,
        replies: [],
      };
      setComments([...comments, newComment]);
      setName("");
      setComment("");
    }
  };

  // Function to handle likes
  const handleLike = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  // Function to handle comment deletion
  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  // Function to handle reply submission
  const handleReply = (id, replyText) => {
    if (replyText.trim()) {
      setComments(
        comments.map((c) =>
          c.id === id
            ? {
                ...c,
                replies: [...c.replies, { text: replyText, date: new Date().toLocaleString() }],
              }
            : c
        )
      );
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Leave a Comment</h4>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h5 className="mt-4">Comments</h5>
      <ul className="list-group">
        {comments.map((c) => (
          <li key={c.id} className="list-group-item">
            <strong>{c.name}:</strong> {c.comment}  
            <br />
            <small className="text-muted">{c.date}</small>
            <div className="mt-2">
              <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleLike(c.id)}>
                👍 {c.likes}
              </button>
              <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(c.id)}>
                ❌ Delete
              </button>
              <ReplyBox onReply={(replyText) => handleReply(c.id, replyText)} />
            </div>
            
            {/* Replies Section */}
            {c.replies.length > 0 && (
              <ul className="mt-3 list-group">
                {c.replies.map((r, index) => (
                  <li key={index} className="list-group-item border-start">
                    <small>{r.text}</small>
                    <br />
                    <small className="text-muted">{r.date}</small>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component for Reply Input
const ReplyBox = ({ onReply }) => {
  const [reply, setReply] = useState("");

  const handleReplySubmit = () => {
    if (reply.trim()) {
      onReply(reply);
      setReply("");
    }
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Write a reply..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <button className="btn btn-sm btn-success mt-2" onClick={handleReplySubmit}>
        Reply
      </button>
    </div>
  );
};

export default Comments;
