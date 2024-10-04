### How to run?

1. Make sure you have `node` and `docker` installed
2. Run the command `yarn bootstrap` - this is a mandatory step, without it nothing will work :)
3. Run the command `yarn dev`
4. Run the command `yarn dev --scope=client` to start only the client
5. Run the command `yarn dev --scope=server` to start only the server

### How to add dependencies?

This project uses `monorepo` based on [`lerna`](https://github.com/lerna/lerna)

To add a dependency for the client
`yarn lerna add {your_dep} --scope client`

For the server
`yarn lerna add {your_dep} --scope server`

For both client and server
`yarn lerna add {your_dep}`

If you want to add a dev dependency, do the same but with the `dev` flag
`yarn lerna add {your_dep} --dev --scope client`

Removing a dependency
`yarn lerna exec 'yarn remove {your_dep}' --scope client`

### Tests

For the client, [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/) is used

`yarn test`

### Linting

`yarn lint`

### Prettier formatting

`yarn format`

### Production build

`yarn build`

And to see what happened

`yarn preview --scope client`
`yarn preview --scope server`

## Hooks

The project uses [lefthook](https://github.com/evilmartians/lefthook)
If you really, really need to skip checks, use `--no-verify` (but don't abuse it :)

## Auto-deploy static on vercel

Register an account on [vercel](https://vercel.com/)
Follow the [instructions](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
Specify `packages/client` as the `root directory`

All your PRs will be automatically deployed on vercel. The URL will be provided by the deploying bot

## Production environment in docker

Before the first run, execute `node init.js`

`docker compose up` - will start three services

1. nginx, serving client static files (client)
2. node, your server (server)
3. postgres, your database (postgres)

If you need only one service, just specify which one in the command
`docker compose up {service_name}`, for example `docker compose up server`

### Build

`docker compose build` - build all services (for building and subsequent launch - `docker compose up --build`)

Building a specific service:
`docker compose build {service_name}`, for example `docker compose build`

### Stop

`docker compose stop` - stop all services

Stopping a specific service:
`docker compose stop {service_name}`, for example `docker compose stop server`

### Other

`docker ps` or `docker compose ps` - view running containers or services

`docker ps -a` or `docker compose ps -a` - view all existing containers or services

`docker system prune --all` - to clean up previously created containers and cache

## Sequelize

Currently, updating (changing) models of existing tables in the database will not change these tables in any way.

In the `server/db.ts` file, you can set:

`sequelize.sync({ force: true })` - reset the entire current database (all existing data will be deleted) and recreate all existing tables

`sequelize.sync({ alter: true })` - make changes to existing tables

## Game description

### Main elements of the game:

1. **Start screen:**

   - The game starts with a start screen that has the main menu.

2. **Gameplay:**

   - After pressing the "Start game" button, the player enters an endless game field, where they need to move using four keyboard buttons: W, A, S, D.
   - Shooting is done in the direction of the player's movement.

3. **Controls:**

   - W: move forward with automatic shooting forward.
   - S: move backward with automatic shooting backward.
   - A: move left with shooting to the left.
   - D: move right with shooting to the right.

4. **Diagonal movement:**

   - W + A: diagonal movement up and left.
   - A + S: diagonal movement down and left.
   - S + D: diagonal movement down and right.
   - D + W: diagonal movement up and right.

5. **Enemies:**

   - Mini Monsters (2 hp) appear at 0 minutes.
   - Minsters (6 hp) appear at 2 minutes.
   - Big Minsters (10 hp) appear at 4 minutes.
   - Mega Minsters (14 hp) appear at 6 minutes.

6. **Upgrades when reaching a new level:**
   - **Hearts:** Increases health by 1
   - **Bullet damage:** Increases bullet damage by 30% of the current damage.
   - **Reload speed:** Decreases weapon reload speed by 10% of the current speed.
   - **Movement speed:** Increases player movement speed by 10% of the current level.
   - **Crystal magnet range:** Increases the magnet range, allowing you to collect crystals from a greater distance.
   - **Thanos snap:** Half of all enemies die.
   - **Flamethrower:** For 10 seconds, the player gets a high reload speed and high bullet damage.

### Game screen:

- **Level and crystal scale:** Shows the player's progress towards leveling up.
- **Time counter:** Shows the elapsed game time.
- **Upgrade icons:** Display the upgrades the player has received.
- **Number of killed enemies and hearts:** Shows the player's statistics.
- **"Exit" button:** Allows you to leave the game and return to the start screen.

### Windows in the game:

- **Game over:** Pops up when the player dies, with the option to return to the start screen or start a new game

