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

## How to run?

1. Make sure you have `node` and `docker` installed
2. Run the command `yarn bootstrap` - this is a mandatory step, without it nothing will work :)
3. Run the command `yarn dev`
4. Run the command `yarn dev --scope=client` to start only the client
5. Run the command `yarn dev --scope=server` to start only the server
