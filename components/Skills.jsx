function Skills() {
  const skills = ["Java", "JavaScript", "React", "Spring Boot", "MySQL", "HTML", "CSS"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-box">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
