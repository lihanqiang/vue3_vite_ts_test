<template lang="pug">
svg.icon(aria-hidden="true")
  use(:xlink:href="`#${name}`")
</template>
<script lang="ts">
import { toRefs, computed } from 'vue'
export default {
  name: 'icon',
  props: ['name'],
  setup (props) {
    const { name = '' } = toRefs(props)
    return { name }
  }
}
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>