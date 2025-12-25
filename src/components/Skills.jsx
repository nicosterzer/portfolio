import React from 'react'
import './Skills.css'

function Skills() {

  const principales = [
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: '.NET Core', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Visual Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' }
  ]

  const secundarias = [
    { name: 'T-SQL / Stored Procedures', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Swagger / OpenAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Azure DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' }
  ]

  return (
    <section id="skills" className="skills">

      <div className="container">

        <h2 className="section-title">Habilidades principales</h2>

        <div className="skills-grid">
          {principales.map((skill, i) => (
            <img
              key={i}
              src={skill.logo}
              alt={skill.name}
              title={skill.name}
              className="skill-logo"
            />
          ))}
        </div>

        <h2 className="section-title">Habilidades secundarias</h2>

        <div className="skills-grid">
          {secundarias.map((skill, i) => (
            <img
              key={i}
              src={skill.logo}
              alt={skill.name}
              title={skill.name}
              className="skill-logo"
            />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Skills
