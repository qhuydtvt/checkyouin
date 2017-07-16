import React from 'react';

export default function(props) {
  const {displayName, avatar} = props.user;
  return (
    <div className="user-detail">
      <img className="user-avatar" src={avatar} />
      <h4 className="user-name">  { displayName } </h4>
    </div>
  );
}
