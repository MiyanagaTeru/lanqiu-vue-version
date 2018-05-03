<template>
  <div class="matchWrapper" :class="{isDone}">
    <table class="oneMatchTable">
      <thead>
        <tr>
          <th colspan="3">第{{matchNumber}}场</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="team" :class="[winnerTeam === 'one' ? 'pop' : '']">
            <player-button v-for="player in teamOnePlayers" :key="player.number">
              {{ player.number }}
            </player-button>
          <td class="middle">
            <img class="vsImage" src="../assets/vs.png" />
          </td>
          </td>
          <td class="team" :class="[winnerTeam === 'two' ? 'pop' : '']">
            <player-button v-for="player in teamTwoPlayers" :key="player.number">
              {{ player.number }}
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
    matchNumber: Number,
    teamOnePlayers: Array,
    teamTwoPlayers: Array,
    isDone: Boolean,
    winnerTeam: String
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
