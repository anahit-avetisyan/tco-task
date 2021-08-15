<template>
  <div class="flex justify-between items-center">
    <p class="text-textColor text-2xl">{{ title }}</p>
    <div class="flex items-center">
      <FreeSvg class="mr-6"/>
      <ProSvg class="mr-6"/>
      <VipSvg class="mr-6"/>
      <button class="rounded bg-blue text-white px-5 py-2 text-base h-auto">Upgrade Now</button>
    </div>
  </div>
</template>

<script>

import FreeSvg from "./svg/FreeSvg";
import ProSvg from "./svg/ProSvg";
import VipSvg from "./svg/VipSvg";

export default {
  name: 'Header',
  components: {VipSvg, ProSvg, FreeSvg},
  props: {
    title: {
      type: String,
      default: ''
    },
    plans: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>