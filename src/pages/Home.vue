<template>
  <div>
      <y-button @tap="inc">+</y-button>
      <span>{{ count }}</span>
      <y-button @tap="dec">-</y-button>
      <span>{{ multiple }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State, Getter } from 'vuex-class'
import { YButton } from 'components'

@Component({
    components: {
        YButton
    }
})
export default class A extends Vue {
    @State count: number
    @Action inc: Function
    @Action dec: Function
    @Getter multiple: number
}
</script>
