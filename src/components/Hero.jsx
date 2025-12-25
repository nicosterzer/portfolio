import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hola, soy Nicolás Exequiel Sterzer</span>
              <span className="name">Desarrollador .NET Junior</span>
              <span className="role">Enfocado en backend y bases de datos</span>
            </h1>

            <p className="hero-description">
              Desarrollador backend con experiencia creando APIs claras, seguras y mantenibles 
              en .NET. Trabajo con SQL Server, Sybase y Redis para construir soluciones 
              escalables y orientadas a rendimiento.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Proyectos
              </button>

              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">Program.cs</span>
              </div>

              <pre className="code-content">
{`var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var app = builder.Build();

app.MapGet("/api", () => 
    new { message = "Backend Ready" }
);

app.Run();`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
