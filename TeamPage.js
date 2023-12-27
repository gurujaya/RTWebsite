
import React from 'react';
import Head from 'next/head';

const teamData = [
  {
    id: 1,
    name: 'Test',
    role: 'TestRole',
    imageSrc: '/images/john-doe.jpg', // replace with actual image path
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <meta name="description" content="Meet our awesome team" />
      </Head>

      <h1>Our Team</h1>

      <div className="team-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.imageSrc} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .team-card {
          border: 1px solid #ddd;
          padding: 20px;
          text-align: center;
        }

        .team-card img {
          max-width: 100%;
          border-radius: 50%;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
