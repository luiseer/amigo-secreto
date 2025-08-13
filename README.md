# 🎁 Amigo Secreto

Aplicación web sencilla que permite ingresar una lista de nombres y, al presionar un botón, sortear un nombre al azar (el "número secreto" o amigo secreto).

## 🚀 Características

- **Ingreso de nombres**: A través de un campo de texto (`<input>`) puedes agregar tantos nombres como quieras.
- **Lista en tiempo real**: Los nombres ingresados se muestran en una lista (`<ul>`).
- **Sorteo aleatorio**: Un botón permite seleccionar un nombre al azar de la lista.
- **Validaciones**:
  - No permite agregar campos vacíos.
  - No se puede sortear si no hay nombres en la lista.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (Vanilla)**: Lógica de agregar nombres y sorteo.

## 📂 Estructura de archivos

📦 amigo-secreto
┣ 📜 index.html # Estructura principal
┣ 📜 style.css # Estilos
┣ 📜 app.js # Lógica de la aplicación
┗ 📂 assets # Imágenes e íconos


## 📋 Uso

1. **Abrir la aplicación** en un navegador.
2. **Escribir un nombre** en el campo de texto.
3. **Presionar "Añadir"** para agregarlo a la lista.
4. Repetir el proceso para todos los participantes.
5. **Presionar "Sortear amigo"** para mostrar el nombre sorteado en pantalla.

## 📸 Captura de pantalla

![Vista previa de la aplicación](assets/amigo-secreto.png)

## 💡 Ejemplo de funcionamiento

Lista: Juan, Ana, Pedro
Botón "Sortear amigo" presionado → Resultado: Ana 🎉


## ▶️ Ejecución

1. Asegúrate de tener **Node.js** instalado.  
   Verifica con:
   ```bash
   node -v
   npm -v
npm install -g http-server

http-server

http://localhost:8080
