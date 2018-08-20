<template>
    <div>
        <h1>{{msg}}</h1>
        <input type="color" v-model="hexColor"/>
        <div>{{hexColor}}</div>
        <div>{{rgbColor}}</div>
        <div class="color-belt" :style="rBackground">
            <input class="color-input" type="range" v-model="r" min="0" max="255"/>
        </div>
        <div class="color-belt" :style="gBackground">
            <input class="color-input" type="range" v-model="g" min="0" max="255"/>
        </div>
        <div class="color-belt" :style="bBackground">
            <input class="color-input" type="range" v-model="b" min="0" max="255"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Color from "./lib/Color";

export default Vue.extend({
  data() {
    return {
      msg: "Hello world",
      color: new Color(0, 0, 0)
    };
  },
  computed: {
    hexColor: {
      get(): string {
        return this.color.toString("hex");
      },
      set(hexColor: string) {
        this.color.set(hexColor);
      }
    },
    rgbColor(): string {
      return this.color.toString("rgb");
    },
    r: {
      get(): number {
        return this.color.r;
      },
      set(v) {
        return this.color.set((this.color & 0x00ffff) | (v << 16));
      }
    },
    g: {
      get(): number {
        return this.color.g;
      },
      set(v: number) {
        return this.color.set((this.color & 0xff00ff) | (v << 8));
      }
    },
    b: {
      get(): number {
        return this.color.b;
      },
      set(v: number) {
        return this.color.set((this.color & 0xffff00) | v);
      }
    },
    rBackground() {
      return {
        background: `linear-gradient(to right, rgb(0, ${this.g}, ${
          this.b
        }), rgb(255, ${this.g}, ${this.b}))`
      };
    },
    gBackground() {
      return {
        background: `linear-gradient(to right, rgb(${this.r}, 0, ${
          this.b
        }), rgb(${this.r}, 255, ${this.b}))`
      };
    },
    bBackground() {
      return {
        background: `linear-gradient(to right, rgb(${this.r}, ${
          this.g
        }, 0), rgb(${this.r}, ${this.g}, 255))`
      };
    }
  },
  methods: {}
});
</script>

<style scoped>
h1 {
  font-family: "Times New Roman", Times, serif;
}
.color-input {
  width: 100%;
  margin-left: 0;
}
.color-belt {
  margin-top: 10px;
  width: 250px;
}
</style>
