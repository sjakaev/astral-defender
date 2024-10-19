# Astral Defender

[![Website Status](https://img.shields.io/website-up-down-green-red/https/astral-defender.online.svg)](https://astral-defender.online/game)

Welcome to **Astral Defender**—an engaging 2D browser game that combines fast-paced action with strategic upgrades. Developed as part of a collaborative project in the frontend developer course at Yandex, this game showcases my ability to build complex, interactive web applications from the ground up using modern technologies.

![image](https://github.com/user-attachments/assets/c7a146b8-cc78-4a3b-87cf-3792a7ff52a2)

## 📌 Project Description

**Astral Defender** is a survival shooter game where players navigate an endless space arena, battling waves of increasingly challenging enemies. The game is designed to be both fun and technically impressive, demonstrating expertise in game development, web technologies, and user experience design.

## 🚀 Live Demo

Play the game here: <a href="https://astral-defender.online/game" target="_blank">Astral Defender</a>

*Note: The game is fully responsive and optimized for both desktop and mobile devices.*

## 🎮 Gameplay Overview

### Main Elements

1. **Start Screen**:
   - The game begins with a main menu where players can start the game, access the guide, or adjust settings.

2. **Controls**:
   - **Desktop**: Use `W`, `A`, `S`, `D` keys for movement. The player character automatically shoots in the direction of movement.
   - **Mobile**: An on-screen joystick is available for seamless control.

3. **Movement**:
   - **Directional**: Move up (`W`), down (`S`), left (`A`), right (`D`).
   - **Diagonal**: Combine keys for diagonal movement (e.g., `W` + `A` for up-left).

4. **Enemies**:
   - **Mini Monsters**: Appear at 0 minutes, 2 HP.
   - **Monsters**: Appear at 2 minutes, 6 HP.
   - **Big Monsters**: Appear at 4 minutes, 10 HP.
   - **Mega Monsters**: Appear at 6 minutes, 14 HP.

5. **Upgrades**:
   - **Hearts**: Increase health by 1.
   - **Bullet Damage**: Increase damage by 30% of current damage.
   - **Reload Speed**: Decrease reload time by 10%.
   - **Movement Speed**: Increase speed by 10%.
   - **Crystal Magnet Range**: Increase pickup range for crystals.
   - **Thanos Snap**: Eliminate half of all enemies instantly.
   - **Flamethrower**: Gain high damage and reload speed for 10 seconds.

6. **Game Over**:
   - Players receive a summary of their performance and options to restart or return to the main menu.

## ✨ Key Features

- **Responsive Design**: Fully playable on both desktop and mobile devices.
- **Progressive Web App (PWA)**: Playable offline after initial load.
- **Server-Side Rendering (SSR)**: Improved performance and SEO.
- **State Management**: Utilizes Redux for efficient state handling.
- **Routing**: Implemented with React Router for seamless navigation.
- **Error Handling**:
  - Custom 404 and 500 error pages.
  - Graceful handling of client and server errors.

## 🛠 Technologies Used

### Frontend

- **TypeScript**: Strong typing for reliability and scalability.
- **React**: Component-based UI development.
- **Redux Toolkit**: Efficient state management.
- **React Router**: Declarative routing for React applications.
- **SCSS (Sass)**: Enhanced styling capabilities.
- **Canvas API**: High-performance rendering for game graphics.
- **Web APIs**:
  - **Service Workers**: Offline functionality.
  - **Fullscreen API**: Immersive gameplay experience.
  - **Notifications API**: In-game notifications.
  - **LocalStorage**: Persistent game settings.
  - **Web Workers**: Background processing.
  - **Device Orientation API**: Improved mobile controls.

### Backend

- **Node.js**: Server environment.
- **Express.js**: Web framework for handling routes and middleware.

### Testing & Quality

- **Jest**: Unit and integration testing.
- **ESLint & Prettier**: Code linting and formatting.
- **LeftHook**: Git hooks for enforcing code standards before commits.

### Deployment & DevOps

- **Docker**: Containerization of the application.
- **Nginx**: Web server for serving static files and reverse proxying.
- **CI/CD**: Automated testing and deployment pipeline.
- **SSL**: Secure connections with HTTPS.

## 👨‍💻 Architecture and Approaches

- **Monorepo Structure**: Organized codebase using Lerna.
- **Server-Side Rendering (SSR)**: Improved initial load times and SEO benefits.
- **Progressive Enhancement**: Ensuring core functionality works for all users.
- **Design Patterns**: Implemented SOLID principles, DRY, and KISS methodologies.

## 🚧 Development and Deployment

- **Continuous Integration/Continuous Deployment (CI/CD)**: Automated processes ensure rapid and reliable deployment.
- **Environment Configuration**: Node.js version specified in `.nvmrc` and `package.json` (`>=15`).
- **Performance Optimization**:
  - Code splitting and lazy loading.
  - Webpack configuration for chunking CSS and JS files.
- **Memory Leak Prevention**: Regular profiling and optimization.

## 🔧 Installation and Running

**Prerequisites**:

- Node.js (version >= 15)
- Docker

**Steps**:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sjakaev/astral-defender.git
   cd astral-defender
   ```

2. **Bootstrap the project**:

   ```bash
   yarn bootstrap
   ```

   *This is a mandatory step to install dependencies and set up the project structure.*

3. **Start the development server**:

   ```bash
   yarn dev
   ```

4. **Run client or server separately**:

   - **Client**: `yarn dev --scope=client`
   - **Server**: `yarn dev --scope=server`


## 📩 Contact Me

I am open to opportunities and collaboration. Contact me via email: r.sjakaev@gmail.com or through [LinkedIn](https://www.linkedin.com/in/siakaev/).

---

**Thank you for taking the time to explore Astral Defender!**

