import PropTypes from "prop-types";

import "./styles/Email.css";

function Email(props) {
  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    props.setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    props.setEmails(updatedEmails);
  };

  return (
    <li className={`email ${props.email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => toggleStar(props.email)}
        />
      </div>
      <div
        className="sender"
        // Want to display email if clicked
        onClick={() => {
          props.setSelectedEmail(props.email);
          // Email read if not already read
          if (!props.email.read) {
            toggleRead(props.email);
          }
        }}
      >
        {props.email.sender}
      </div>
      <div
        className="title"
        // Want to display email if clicked
        onClick={() => {
          props.setSelectedEmail(props.email);
          // Email read if not already read
          if (!props.email.read) {
            toggleRead(props.email);
          }
        }}
      >
        {props.email.title}
      </div>
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.object,
  setEmails: PropTypes.func,
  setSelectedEmail: PropTypes.func,
};

export default Email;
