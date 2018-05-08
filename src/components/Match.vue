<template>
  <div class="matchWrapper" :class="[match.done ? 'isDone' : '']">
    <table class="oneMatchTable">
      <thead>
        <tr>
          <th class="header" colspan="3" @click="toggleGameDone(match)">第{{match.matchNumber}}场</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="team"
            :class="[match.winner === 'one' ? 'pop' : '']"
            @click="setWinner(match, 'one')"
          >
            <player-button v-for="player in match.one" :key="player" :isTop="isTop(player)">
              {{ player }}
            </player-button>
          <td class="middle">
            <img class="vsImage" src="../assets/vs.png" />
          </td>
          <td
            class="team"
            :class="[match.winner === 'two' ? 'pop' : '']"
            @click="setWinner(match, 'two')"
          >
            <player-button v-for="player in match.two" :key="player" :isTop="isTop(player)">
              {{ player }}
            </player-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PlayerButton from "./PlayerButton";

export default {
  name: "Match",
  components: {
    PlayerButton
  },
  props: {
    match: Object,
    topPlayers: Array
  },
  methods: {
    toggleGameDone: function (match) {
      match.done = !match.done;
      if (!match.done) {
        match.winner = '';
      }
    },
    setGameDone: function (match) {
      if (!match.done) {
        match.done = true;
      }
    },
    setWinner: function (match, winner) {
      this.setGameDone(match);
      match.winner = winner;
    },
    isTop: function (player) {
      return this.topPlayers.includes(player);
    }
  }
}
</script>

<style>
.matchWrapper {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.isDone:after {
  content: '';
  display: block;
  position: absolute;
  background-color: #f1f1f1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  pointer-events: none;
}

.oneMatchTable {
  width: 100%;
  border-collapse: collapse;
  border-radius: 2px;
  border-style: hidden;
  box-shadow: 0 0 0 2px green;
}

.header {
  cursor: pointer;
}

.oneMatchTable tr {
  border: 2px solid green;
  border-radius: 2px;
  text-align: center;
  padding: 10px 0;
}

.team {
  width: 40%;
  padding: 10px 0;
  position: relative;
  cursor: pointer;
}

.pop {
  z-index: 1;
}

.middle {
  width: 20%;
}

.vsImage {
  height: 40px;
}
</style>
