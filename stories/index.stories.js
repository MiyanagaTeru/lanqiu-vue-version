/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NumberButton from '../src/components/NumberButton';
import PlayerButton from '../src/components/PlayerButton';
import NormalButton from '../src/components/NormalButton';
import Match from '../src/components/Match';

storiesOf('Button', module)
.add('in number input', () => ({
  components: { NumberButton },
  template: '<number-button>7</number-button>'
}))
.add('player Number, normal', () => ({
  components: { PlayerButton },
  template: '<player-button>7</player-button>'
}))
.add('player Number, top', () => ({
  components: { PlayerButton },
  template: '<player-button is-top>7</player-button>'
}))
.add('redo button', () => ({
  components: { NormalButton },
  template: '<normal-button>Redo</normal-button>'
}));

storiesOf('Match', module)
.add('untouched', () => ({
  components: { Match },
  template: `
    <match
      :match-number="2"
      :team-one-players="[{number: 2}, {number: 3}, {number: 7}]"
      :team-two-players="[{number: 1}, {number: 4}, {number: 5}, {number: 6}]">
    </match>`
}))
.add('is skipped, without a winner', () => ({
  components: { Match },
  template: `
    <match
      :match-number="2"
      :isDone=true
      :team-one-players="[{number: 2}, {number: 3}, {number: 7}]"
      :team-two-players="[{number: 1}, {number: 4}, {number: 5}, {number: 6}]">
    </match>`
}))
.add('match done, team one won', () => ({
  components: { Match },
  template: `
    <match
      :match-number="2"
      :isDone=true
      :team-one-players="[{number: 2}, {number: 3}, {number: 7}]"
      :team-two-players="[{number: 1}, {number: 4}, {number: 5}, {number: 6}]"
      winnerTeam="one">
    </match>`
}))
.add('match done, team two won', () => ({
  components: { Match },
  template: `
    <match
      :match-number="2"
      :isDone=true
      :team-one-players="[{number: 2}, {number: 3}, {number: 7}]"
      :team-two-players="[{number: 1}, {number: 4}, {number: 5}, {number: 6}]"
      winnerTeam="two">
    </match>`
}))
;

/* eslint-enable react/react-in-jsx-scope */
