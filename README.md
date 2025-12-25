# Portfolio - Desarrollador .NET

Portfolio web moderno y responsive para desarrollador .NET, construido con React y Vite.

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Animaciones suaves y transiciones
- ✅ Secciones: Hero, Sobre Mí, Habilidades, Proyectos, Contacto
- ✅ Formulario de contacto funcional
- ✅ Navegación suave entre secciones
- ✅ Optimizado para rendimiento

## 🛠️ Tecnologías

- React 18
- Vite
- CSS3 (con variables CSS y Grid/Flexbox)
- HTML5

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personalización

Puedes personalizar el portfolio editando:

- **Colores**: Modifica las variables CSS en `src/index.css`
- **Contenido**: Edita los componentes en `src/components/`
- **Proyectos**: Actualiza el array de proyectos en `src/components/Projects.jsx` con tus proyectos .NET
- **Habilidades**: Modifica las habilidades en `src/components/Skills.jsx` (actualmente configurado para .NET Core, SQL Server, Sybase, Redis)
- **Redes sociales**: Actualiza los enlaces en `src/components/Contact.jsx`

## 📝 Notas

- El portfolio está configurado para un desarrollador .NET Junior especializado en .NET Core, SQL Server, Sybase y Redis
- Asegúrate de actualizar los enlaces de GitHub, LinkedIn y email en el componente `Contact.jsx`
- Los enlaces de proyectos (#) deben ser reemplazados con URLs reales de tus repositorios
- Puedes agregar una imagen de perfil real en el componente `About.jsx`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

