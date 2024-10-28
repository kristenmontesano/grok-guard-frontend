import React, { useState } from 'react';
import { comments, Comment } from '../data/commentsData';

interface CommentListProps {
  onSelect: (comment: string | null) => void;
}

const CommentList: React.FC<CommentListProps> = ({ onSelect }) => {
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const handleSelect = (comment: Comment) => {
    setSelectedComment(comment);
    onSelect(comment.text);
  };

  return (
    <div className="comments-container">
      <h2>Select a Comment to Analyze</h2>
      <div className="comments-list">
        {comments.map((comment) => (
          <button
            key={comment.id}
            onClick={() => handleSelect(comment)}
            className={`comment-button ${selectedComment?.id === comment.id ? 'selected' : ''}`}
          >
            {comment.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
