<style lang="less" scoped>
#loading-circle {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-left-color: transparent;
    border-radius: 50%;
    animation: .5s loading infinite linear;
}
@keyframes loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

<template>
  <div v-show="isShow" id="loading-circle"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class YSpin extends Vue {
    @Prop({ default: true, type: Boolean }) isShow: boolean
}
</script>
