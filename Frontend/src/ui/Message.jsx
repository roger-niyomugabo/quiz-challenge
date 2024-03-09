/* eslint-disable react/prop-types */
function Message({ message }) {
  return (
    <p className="message">
      <span role="img">👋</span> {message}
    </p>
  );
}
export default Message;
