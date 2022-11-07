# Valley Rock Chess

This web app was built with the intention of combining chess with bouldering! If you've come here as a developer / chess player / climber, we should be friends.

The application was written using Vue.js for the frontend, and serverless functions running on Vercel for the backend with a MongoDB NoSQL database.

If there are requests for this to be extended to differenciate gyms I'm happy to do so.

# Table of Contents

- Gamemodes
  - Volume Day
  - H.O.R.S.E.
  - Time Control
  - Boulder Battle
- Usage

# Gamemodes

## Volume Day

Simplest of the gamemodes, each player must climb a boulder prior to moving.

The time it takes to find, climb, and move contributes to the players time control.

The desired game is meant to feel like Blitz chess, so for each move each player is alloted some time added per move to find and climb a boulder.

The default time control is 10 minutes | 2 minute.

Climbing fast is rewarded, but running isn't tolerated!

Both players decide a V grade they want to start with.

Self repeats are not permited, and as you run out of boulders you'll have to move up the boulder grades.

### Optional Variations

- Set Starting Grade (Per Player)
- Different Time Control (Base / Additions) (Per Player)
- Add Walk Pauses

## H.O.R.S.E.

There is no time control except that no single move can take more than 1 minute.

Before each turn, each player must climb.

Each player must repeat the climb of the prior.

Each failure to set a climb, or repeat a climb (flash in all attempts) results in a letter.

Once a player reaches H.O.R.S.E. they forfit a turn.

The player with two turns cannot move a piece twice, or put the King in check on their first move.

### Optional Variations

- Reduce Letters (Per Player)
- Remove Move Time Limit (Per Player)

## Time Control

Just like time control, each player has an alloted amount of time to climb and then make a move.

However the V grade of a climb adds a different amount of time.

You are allowed to ditch a climb and go for another, however you'll be wasting time and gaining less if you go for a lesser V grade.

### Optional Variations

- Set Different Base Boulder Level (Per Player)
- Set Different Time Additions for Boulder Grades (Per Player)
- Disallow Ditches (Per Player)
- Different Time Control (Base / Additions) (Per Player)
- Add Walk Pauses

## Boulder Battle

In this gamemode, climbing is only required on captures. There is a small time control of 1 minute per move.

There are different ranges, however the climbs roughly align with the score of the pieces.

To capture a piece, the attacker must complete a boulder of its corresponding value, and the defender must complete a boulder of their piece's value.

Attempts matter. In cases of ties, both players must complete a boulder of a higher level.

If the attacker loses, or there's an inability of both players to complete a boulder, the move is skipped and attacker put back.

### Optional Variations

- Defeat Kills Attacker
- Set Different Base Boulder Level (Per Player)
- Remove Move Time Limit (Per Player)

# Usage
