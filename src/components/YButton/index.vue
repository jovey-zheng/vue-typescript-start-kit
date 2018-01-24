<template>
    <button @click="tap">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class YButton extends Vue {
    tap (): void {
        this.$emit('tap')
    }
}
</script>
