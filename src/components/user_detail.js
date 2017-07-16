import React from 'react';

export default function(props) {
  const {displayName, avatar, recordCountToday} = props.user;
  return (
    <div className="user-detail">
      <img className="user-avatar" src={avatar} />
      <h4 className="user-name">{ displayName }</h4>
      <div className="default-margin recods-today">
          <div className="records-today-label">Records today: </div>
          <strong>{recordCountToday}</strong>
      </div>
      <button className="btn btn-warning default-margin">Log out</button>
    </div>
  );
}
