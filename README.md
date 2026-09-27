# Portafolio Profesional — Gabriel Asunción

Portafolio web profesional desarrollado con **HTML5 semántico**, **CSS3 puro con Custom Properties (Design System)** y **JavaScript Vanilla**, enfocado en buenas prácticas de arquitectura web, accesibilidad, diseño responsivo y rendimiento óptimo sin dependencias externas.

---

## 👤 Información del Estudiante

- **Nombre:** Gabriel Asunción
- **Perfil:** Desarrollador de Software / Web Fullstack Junior
- **GitHub:** [gabriel-asuncion-20](https://github.com/gabriel-asuncion-20)
- **Especialidad:** JavaScript (ES6+), Node.js, Frontend interactivo, APIs RESTful y maquetación semántica.

---

## 🚀 Proyectos Destacados

El portafolio incluye 3 proyectos representativos que demuestran capacidades en Frontend, Backend y programación de lógica interactiva:

### 1. Tienda Online E-commerce
* **Descripción:** Plataforma de comercio electrónico con catálogo dinámico de productos, vista previa de detalles, carrito de compras reactivo y diseño completamente adaptable a dispositivos móviles.
* **Problema que resuelve:** Facilita a los usuarios una experiencia de compra fluida, reduciendo la fricción al navegar inventarios y agregar ítems al carrito.
* **Tecnologías:** HTML5, CSS3, JavaScript (ES6+), Vercel.
* **Repositorio:** [gabriel-asuncion-20/Tienda-Online-Ecommerce](https://github.com/gabriel-asuncion-20/Tienda-Online-Ecommerce)
* **Proyecto Desplegado:** [prueba-proyecto-01-b9kw.vercel.app](https://prueba-proyecto-01-b9kw.vercel.app/)

### 2. Videojuego Clásico Pong (Arcade 2D)
* **Descripción:** Recreación del mítico videojuego arcade Pong implementado mediante JavaScript nativo y la API de HTML5 Canvas.
* **Problema que resuelve:** Simula la física de rebotes vectoriales, control de aceleración de la pelota, detección de colisiones de paletas y bucle de renderizado interactivo a 60 FPS sin sobrecargar el navegador.
* **Tecnologías:** HTML5 Canvas, JavaScript (ES6+), Game Loop, CSS3.
* **Repositorio:** [gabriel-asuncion-20/PONG-GAME](https://github.com/gabriel-asuncion-20/PONG-GAME)

### 3. Ecommerce Inventory API
* **Descripción:** Servicio backend y API RESTful diseñada para la administración y control de inventarios, existencias de stock y catálogos de comercio electrónico.
* **Problema que resuelve:** Centraliza de forma segura la gestión de productos, permitiendo operaciones CRUD, validación de stock y respuestas estructuradas en formato JSON para aplicaciones cliente.
* **Tecnologías:** Node.js, Express, REST API, JSON, Postman.
* **Repositorio:** [gabriel-asuncion-20/Ecommerce-Inventory-Api](https://github.com/gabriel-asuncion-20/Ecommerce-Inventory-Api)

---

## 🎨 Design System y Arquitectura Visual

El proyecto implementa un sistema visual propio basado en **CSS Custom Properties (Variables CSS)** para asegurar coherencia, escalabilidad y facilidad de mantenimiento:

### Tokens de Diseño (`:root`)
* **Colores Principales:**
  * `--color-primary: #2563eb` (Azul primario de acento)
  * `--color-secondary: #7c3aed` (Púrpura secundario)
  * `--color-background: #ffffff` (Modo claro) / `#0f172a` (Modo oscuro)
  * `--color-surface: #f8fafc` (Modo claro) / `#1e293b` (Modo oscuro)
  * `--color-text: #0f172a` (Modo claro) / `#f8fafc` (Modo oscuro)
  * `--color-border: #e2e8f0` (Modo claro) / `#334155` (Modo oscuro)
* **Escala de Espaciado Modular:**
  * `--space-sm: 0.5rem` (8px)
  * `--space-md: 1rem` (16px)
  * `--space-lg: 2rem` (32px)
  * `--space-xl: 4rem` (64px)
* **Componentes Documentados:**
  * Botones (Primario, Secundario y Small)
  * Badges y Etiquetas de tecnología
  * Inputs y Textarea de formularios
  * Barra de Navegación (Navbar)
  * Cards de Proyectos reutilizables

---

## ⚡ Funcionalidades Interactivas (JavaScript)

El sitio implementa 5 funcionalidades con JavaScript puro:

1. **Tema Claro / Oscuro con Persistencia:** Permite alternar entre el tema visual claro y oscuro, almacenando la preferencia del usuario en `localStorage`.
2. **Menú de Navegación Responsive:** Botón tipo hamburguesa para pantallas táctiles/móviles, con cierre automático al seleccionar cualquier sección.
3. **Filtro Dinámico de Proyectos:** Filtrado instantáneo por categoría (`Todos`, `Frontend`, `JavaScript`, `Backend`) manipulando los atributos de datos y el DOM.
4. **Validación de Formulario en Tiempo Real:** Verificación de campos obligatorios, validación de sintaxis de correo electrónico mediante Regex y longitud mínima de mensaje con retroalimentación visual accesible.
5. **Botón Flotante "Volver Arriba":** Detección del scroll de la página para mostrar u ocultar suavemente el botón de regreso al encabezado.

---

## 📁 Estructura del Proyecto

```text
portafolio-main/
│
├── index.html       # Estructura semántica HTML5 y contenido del portafolio
├── style.css        # Hoja de estilos con CSS Custom Properties y Responsive Design
├── script.js        # Lógica interactiva en Vanilla JavaScript
└── README.md        # Documentación técnica del proyecto
```

---

## 💻 Instrucciones de Visualización Local

Para visualizar el proyecto en tu computadora:

1. Clona o descarga este repositorio en tu equipo.
2. Abre el archivo `index.html` directamente en tu navegador web preferido (Chrome, Firefox, Edge, etc.).
3. Opcionalmente, puedes abrir la carpeta en Visual Studio Code y utilizar la extensión **Live Server** para recarga automática.

---

## 🌐 Publicación en GitHub Pages

Para publicar este portafolio en internet mediante GitHub Pages:

1. Sube tu código al repositorio público en GitHub:
   ```bash
   git add .
   git commit -m "feat: completar portafolio profesional y documentacion"
   git push origin main
   ```
2. En GitHub, ingresa a tu repositorio y ve a la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, selecciona `Deploy from a branch`.
5. En **Branch**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`, luego presiona **Save**.
6. En unos minutos, GitHub Pages generará tu URL pública (por ejemplo: `https://gabriel-asuncion-20.github.io/portafolio/`).
