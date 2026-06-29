# 🚀 Mapa de Correlatividades — Ingeniería Aeroespacial UTN

Aplicación web interactiva para hacer seguimiento del avance de carrera, basada en el plan de estudios y las correlatividades de **Ingeniería Aeroespacial (UTN, Plan 2023 — Ord. 1926/1927)**.

🔗 **Demo en vivo:** https://luciocasanovaa.github.io/correlatividades-aero/

---

## ✨ Funcionalidades

- **Tablero por nivel**: las 50 materias de la carrera organizadas en tarjetas, agrupadas por año/nivel.
- **Estados dinámicos**: cada materia pasa automáticamente por `Bloqueada → Disponible → Final pendiente → Aprobada`, calculado en base a las correlatividades reales del plan.
- **Diagrama de correlatividades**: vista de red (SVG) que visualiza todas las materias y sus conexiones, con resaltado interactivo al pasar el mouse para ver qué desbloquea cada una.
- **Progreso persistente**: el avance se guarda automáticamente en el navegador (`localStorage`), sin necesidad de cuenta ni backend.
- **Estadísticas en vivo**: contador de materias aprobadas, con final pendiente, disponibles y porcentaje de avance de la carrera.
- **Responsive**: pensado para usarse desde celular, tablet o computadora.
- **Detalle especial**: una sorpresa al completar el 100% de la carrera 🎉

---

## 🛠️ Stack

Proyecto 100% **vanilla** — sin frameworks, sin build, sin dependencias:

- HTML5
- CSS3 (variables, grid, animaciones)
- JavaScript (vanilla)

Pensado para correr directamente en GitHub Pages, sin pasos de compilación.

---

## 📂 Estructura

```
├── index.html      # Estructura de la página
├── styles.css      # Estilos (tema oscuro, tarjetas, diagrama)
└── app.js          # Lógica de correlatividades, estado y render
```

---

## 🚀 Cómo correrlo localmente

No requiere instalación. Basta con clonar el repo y abrir `index.html` en el navegador:

```bash
git clone https://github.com/tu-usuario/correlatividades-aero.git
cd correlatividades-aero
open index.html   # o doble click en el archivo
```

---

## 💡 Motivación

Proyecto hecho para acompañar el día a día de cursada: visualizar de un vistazo qué materias se pueden cursar en cada cuatrimestre y qué desbloquea cada final aprobado, sin tener que revisar el plan de estudios cada vez.

---

## 📝 Licencia

Uso libre con fines educativos / personales.
