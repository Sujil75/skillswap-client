const CommentBox = ({ comment }) => {
  return (
    <div className="border p-3 rounded bg-white shadow">
      <p>{comment.content}</p>
      <span className="text-xs text-gray-500">
        {new Date(comment.created_at).toLocaleString()}
      </span>
    </div>
  )
}

export default CommentBox