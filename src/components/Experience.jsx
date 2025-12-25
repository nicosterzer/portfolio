import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Analista Programador Junior',
      company: 'Accusys Technology',
      period: 'Septiembre 2024 - Actualidad',
      description: [
        'Participación activa en el proyecto Cocomo (plataforma interna para estimación, seguimiento y gestión de requerimientos).',
        'Desarrollo y mantenimiento de APIs REST en .NET Core utilizando buenas prácticas (DTOs, AutoMapper, servicios, repositorios).',
        'Implementación de nuevas funcionalidades en módulos como versiones, requerimientos, factores y tiempos por plataforma.',
        'Uso de Entity Framework Core (Code First, migraciones, relaciones, validaciones y consultas optimizadas).',
        'Implementación de caching con Redis para mejorar desempeño y reducir consultas repetitivas.',
        'Integración con SQL Server y optimización de consultas mediante LINQ y proyecciones.',
        'Manejo de paginación, filtros dinámicos, validaciones y manejo de errores a nivel API.',
        'Trabajo colaborativo utilizando Git, Azure DevOps, Swagger y Postman para seguimiento, pruebas e integración.'
      ]
    },
    {
      id: 2,
      role: 'Desarrollador .NET Jr',
      company: 'Yamana Tech',
      period: 'Marzo 2024 - Septiembre 2024',
      description: [
        'Desarrollo de aplicaciones y APIs REST con ASP.NET Core y C#.',
        'Implementación de acceso a datos con Entity Framework Core y SQL Server.',
        'Diseño de funcionalidades siguiendo principios de arquitectura por capas.',
        'Pruebas e integración utilizando Postman, Swagger y Git.',
        'Acompañamiento en análisis, desarrollo, pruebas y soporte de aplicaciones.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="experience-content">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="experience-list">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
