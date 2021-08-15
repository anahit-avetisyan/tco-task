<template>
  <div class="px-10 bg-primary py-11 min-h-screen">
    <Header :title="pageData.page_title" :plans="pageData.plans"/>
    <Systems :tabs="pageData.tabs" @makeActive="makeActive"/>
  </div>
</template>

<script>
import data from '../../data.json'
import Header from "@/components/home/Header";
import Systems from "@/components/home/Systems";

export default {
  name: 'Home',
  components: {Systems, Header},
  data() {
    return {
      pageData: {}
    }
  },
  mounted() {
    this.pageData = this.addActiveKey(data)
  },
  methods: {
    makeActive(value) {
      this.pageData.tabs.forEach((item, index) => {
        item.active = index === value
      })
    },
    addActiveKey(val) {
      if (val.tabs) {
        val.tabs.forEach((item, index) => {
          item.active = index === 0
        })
      }
      return val
    }
  },

}
</script>