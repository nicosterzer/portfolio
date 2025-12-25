import React from 'react'
import './About.css'
import profilePic from './public/profile-pic.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-content">
          <div className="about-text">

            <p>
              Soy <strong>Nicolás Exequiel Sterzer</strong>, desarrollador <strong>.NET Junior</strong> orientado al backend.
            </p>

            <p>
              Me especializo en la construcción de <strong>APIs REST</strong> claras, seguras y fáciles de mantener 
              utilizando .NET. Trabajo con <strong>SQL Server, Sybase y Redis</strong> para optimizar rendimiento, 
              escalabilidad y manejo de datos.
            </p>

            {/* EDUCACIÓN */}
            <div className="about-education">
              <h3>Educación</h3>

              <p>
                Estudiante avanzado de la <strong>Tecnicatura Universitaria en Programación</strong> 
                en <strong>UTN – Facultad Regional Paraná</strong>.
              </p>

              <p className="education-dates">
                <em>Finalización estimada: Febrero 2026</em>
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">.NET</span>
                <span className="stat-label">Core & Framework</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">SQL</span>
                <span className="stat-label">Server & Sybase</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">Redis</span>
                <span className="stat-label">Caching & Performance</span>
              </div>
            </div>

          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src={profilePic}
                alt="Foto de perfil - Nicolás Sterzer"
                className="profile-photo"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
