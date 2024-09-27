import React from 'react';

const ActivityItem = ({ title, organization, date, description, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-2">{organization} | {date}</p>
    <p className="text-gray-700 mb-2">{description}</p>
    {skills && skills.length > 0 && (
      <div>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Activities = () => {
  return (
    <section id="activities" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Extracurricular Activities</h2>
      <ActivityItem
        title="Leader"
        company="Ascend NTNU"
        date="April 2024 – Present"
        description="Leading one of NTNU's technical organizations, specializing in developing autonomous drones for international competitions. Managing and coordinating six teams, working closely with the board to strategically guide Ascend."
        skills={["Leadership", "Project Management", "Drone Technology", "Team Coordination", "Strategic Planning", "Recruitment"]}
      />
      <ActivityItem
        title="Head of IT"
        company="Nettverksdagene NTNU"
        date="January 2024 – Present"
        description="Board member and leader of the IT group for Nettverksdagene, a yearly career fair. Responsible for the development and maintenance of nettverksdagene.no."
        skills={["Web Development", "IT Management", "Vue", "JavaScript", "Docker", "Git", "GitHub", "Event Planning"]}
      />
      <ActivityItem
        title="Mentor"
        organization="Schibsted Connect"
        date="September 2023 – June 2024"
        description="Participated in a mutual mentorship program with experienced professionals at Schibsted, offering hands-on learning opportunities and bringing new perspectives to enrich the experience for both parties."
        skills={["Mentoring", "Professional Networking", "Knowledge Sharing", "Industry Insights"]}
      />
      <ActivityItem
        title="Election- and Control Committee Member"
        company="NTNUI Triathlon"
        date="February 2024 – Present"
        description="Propose the next board at the annual meeting and participate in awarding prizes to outstanding student athletes."
        skills={["Student Athlete Support"]}
      />
      <ActivityItem
        title="Head of Finance"
        organization="Kielderstyret - Sct. Omega"
        date="2022 – 2024"
        description="The Kielder Committee manages and maintains Omega's student bar at Moholt. I was responsible for accounting and budgeting, as well as securing funding from various organizations."
        skills={["Financial Management", "Budgeting", "Accounting"]}
      />
      <ActivityItem
        title="Videographer"
        organization="UKA"
        date="2023"
        description="Video photographer for UKA 2023, Norway's largest cultural festival. My role involved filming and editing content of events leading up to and during UKA 2023."
        skills={["Video Production", "Editing", "Creative Content"]}
      />
      <ActivityItem
        title="Coordinator"
        organization="Fadderstyret - Sct. Omega"
        date="2023"
        description="The Student Buddy Committee organizes the welcome period for the 400 new students who join the Omega student association each fall. I was responsible for planning and organizing activities, as well as securing sponsorships."
        skills={["Event Planning", "Team Coordination"]}
      />
      <ActivityItem
        title="Class Representative"
        organization="NTNU"
        date="2022 – Present"
        description="Represented the interests of the Cybernetics Robotics Class of 2022."
        skills={["Communication", "Advocacy", "Problem-solving"]}
      />
    </section>
  );
};

export default Activities;
