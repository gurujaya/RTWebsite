import React from 'react';

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="team-member">
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

export default TeamMember;
