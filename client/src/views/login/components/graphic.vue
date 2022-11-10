<template>
  <div
    :class="$style.component">
    <img
      :class="$style.character"
      :src="getCharacter()"
      alt="#" />

    <img
      :class="[$style.object, $style['object-1']]"
      :src="getObject(1)"
      alt="#" />

    <img
      :class="[$style.object, $style['object-2']]"
      :src="getObject(2)"
      alt="#" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'login-view-graphic',

  data: () => ({
    scene: Math.ceil(Math.random() * 7),
  }),

  methods: {
    getCharacter() {
      const images = require.context(
        '../../../assets/images',
        false,
        /\.png$/,
      );

      console.log(images);

      return images(`./scene-${this.scene}-character.png`);
    },

    getObject(number: number) {
      const images = require.context(
        '../../../assets/images',
        false,
        /\.png$/,
      );

      console.log(images);

      return images(`./scene-${this.scene}-object-${number}.png`);
    },
  },
});
</script>

<style lang="scss" module>
.component {
  width: 60%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(
    circle at 75% 80%,
    rgba(123, 89, 244, 0.82) 0%,
    rgba(227,122,246,1) 100%);
  position: relative;
  animation: slide-down .5s ease 0s, morph 20s ease-in-out 0s infinite;
}

.character {
  top: 0rem;
  position: absolute;
  width: 150%;
  animation: hover 5s ease-in-out -.2s infinite;
}

.object {
  top: 0rem;
  position: absolute;
  width: 150%;
}

.object-1 {
  animation: hover 4s ease-in-out -.5s infinite;
}

.object-2 {
  animation: hover 3.4s ease-in-out 0s infinite;
}

@keyframes hover {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(3px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes morph {
  0% {
    border-bottom-right-radius: 10rem;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  50% {
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 10rem;
    border-top-right-radius: 10rem;
  }

  100% {
    border-bottom-right-radius: 10rem;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
}

@keyframes slide-down {
  0% {
    opacity: 0%;
    transform: translateY(-3rem);
  }

  100% {
    opacity: 100%;
  }
}

@keyframes hide {
  0% {
    opacity: 0%;
  }

  99% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
