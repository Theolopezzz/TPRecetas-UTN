# Aplicación de Recetas - Theo Lopez Lovatto

## Descripción

Aplicación web interactiva de recetas de cocina desarrollada con **React 19**, **React Router DOM** y **Material-UI**. Permite explorar un catálogo de 6 recetas culinarias con imágenes, ingredientes, pasos de preparación y detalles completos. Diseñada con enfoque mobile-first, responsiva y con una experiencia de usuario intuitiva y moderna.

## Tecnologías Utilizadas

- **React 19.1.1** – Framework principal para la construcción de la interfaz
- **React Router DOM 7.8.2** – Navegación entre páginas (listado y detalle)
- **Material-UI (MUI) 7.3.2** – Componentes visuales, estilos y diseño responsivo
- **Vite** – Herramienta de construcción rápida y eficiente
- **Context API** – Manejo global del estado de las recetas
- **JSON local** – Almacenamiento de datos de recetas sin backend

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tp-recetas.git
   cd tp-recetas
2. Instala las dependencias:
   ```bash
   npm install
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
4. Abre tu navegador en:
   ```bash
   http://localhost:5173

Estructura del proyecto:
   ```bash
   src/
├── components/
│   ├── recetas/
│   │   ├── RecetaCard.jsx          # Tarjeta de receta en el listado
│   │   ├── RecetasList.jsx         # Lista de todas las recetas
│   │   ├── RecetaDetalle.jsx       # Vista detallada de una receta
│   │   └── IngredientesList.jsx    # Componente reutilizable para ingredientes
│   └── layout/
│       └── Navbar.jsx              # Barra de navegación fija
├── contexts/
│   └── RecetasContext.jsx          # Contexto global para cargar y gestionar recetas
├── data/
│   └── recetas.json                # Archivo con los datos de las 6 recetas
├── pages/
│   ├── RecetasListPage.jsx         # Página principal de listado
│   └── RecetaDetallePage.jsx       # Página de detalle con parámetro dinámico
├── public/
│   └── imgs/                       # Imágenes estáticas cargadas desde el servidor
├── App.jsx                         # Configuración de rutas y proveedor de contexto
└── main.jsx                        # Punto de entrada de la aplicación 


Funcionalidades
✅ Listado de recetas

Tarjetas responsivas con imagen, título, tiempo, dificultad y porciones
Botón “Ver Receta” que redirige al detalle
✅ Detalle de receta

Imagen destacada en tamaño grande
Descripción completa
Lista de ingredientes con cantidad y unidad
Pasos numerados de preparación
Botón “Volver al Listado”
✅ Navegación

Barra de navegación superior con logo
Rutas: /, /recetas, /recetas/:id
Manejo de rutas dinámicas con useParams
✅ Diseño y UX

Responsive en móvil, tablet y escritorio
Paleta de colores de Material-UI con chips de dificultad (verde/amarillo/rojo)
Espaciado consistente y tipografía profesional
Efecto hover en tarjetas para mejorar la interacción
✅ Tecnologías implementadas

✅ Context API para manejo global de recetas
✅ Componentes de Material-UI: Card, Grid, Stack, Chip, Typography, Button, etc.
✅ Uso de useNavigate y useParams para navegación
✅ Archivo JSON local con 6 recetas completas
✅ Componentes reutilizables y estructura organizada

Screenshot de la pagina:
 

Autor
Theo Lopez Lovatto
📧 lopeztheo565@gmail.com

🎓 Trabajo Práctico – Programación IV
Noviembre 2025 
