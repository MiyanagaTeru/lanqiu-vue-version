<template>
  <div id="app">
    <div v-if="step == 'selectNumber'">
      <div>选择人数</div>
      <NumberButton v-for="number in staticNumbers" @click.native="numberSelected(number)">
        {{ number }}
      </NumberButton>
    </div>
    <div v-if="step == 'showBracket'">
      <NormalButton @click.native="restart">
        重新分组
      </NormalButton>
      <Match
        v-for="match in bracket"
        v-if="typeof(match) == 'object'"
        :match="match"
        :topPlayers="topPlayers"
      />
    </div>
  </div>
</template>

<script>
import NormalButton from './components/NormalButton.vue';
import NumberButton from './components/NumberButton.vue';
import Match from './components/Match.vue';
import shuffleArray from './utils/shuffleArray';
import getCombination from './utils/combinator';

export default {
  name: 'app',
  components: {
    NormalButton,
    NumberButton,
    Match
  },
  data: function () {
    return {
      step: "selectNumber",
      staticNumbers: [...Array(11).keys()].slice(1),
      bracket: [],
      players: []
    }
  },
  computed: {
    topPlayers: function () {
      const doneMatches = this.bracket.filter(match => match.done && match.winner);
      if (doneMatches.length === 0) {
        return [];
      }
      const winners = doneMatches.reduce((pre, cur) => [...pre, ...cur[cur.winner]], []);
      let highScore = 0;
      const scoredPlayers = this.players.map(player => {
        const score = winners.reduce((pre, cur) => {
          if (cur === player) {
            return pre + 1;
          } else {
            return pre;
          }
        }, 0);
        if (score > highScore) {
          highScore = score;
        }
        return ({
          player,
          score
        });
      });
      const leadingPlayers = scoredPlayers.filter(player => player.score >= highScore)
      .map(player => player.player);
      return leadingPlayers;
    }
  },
  methods: {
    numberSelected: function (n) {
      const players = [...Array(n+1).keys()].slice(1);
      const leftTeams = shuffleArray(getCombination(players));
      const wholeBracket = leftTeams.map((team, index) => {
        const otherTeam = players.filter(player => !team.includes(player));
        return ({
          matchNumber: index + 1,
          one: team,
          two: otherTeam,
          winner: '',
          done: false
        });
      });
      this.players = players;
      this.bracket = wholeBracket;
      this.step = 'showBracket';
    },
    restart: function () {
      this.bracket = [];
      this.step = 'selectNumber';
    }
  }
}
</script>

<style>
body {
  background-color: #f1f1f1;
  font-family: 'arial';
}

#app {
  text-align: center;
  margin-top: 20px;
}
</style>
