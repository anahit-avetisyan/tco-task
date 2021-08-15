<template>
  <div class="mt-14">
    <div class="border-b border-gray flex px-6">
      <p v-for="(tab,index) in tabs" :key="index" class="py-6 mr-16 text-textColor opacity-60 -mb-0.5 cursor-pointer "
         :class="tab.active?'border-b-2 border-blue':''" @click="makeActive(tab,index)">{{ tab.title }}</p>
    </div>
    <div v-if="hasFileUpload()" class="mt-11">
      <p class="text-textColor mb-6">Systems</p>
      <div>
        <div class="flex text-textColor opacity-60 text-xs w-full justify-between mb-2 z-10">
          <div class="w-1-4">System Name</div>
          <div class="w-1-6">ID</div>
          <div class="w-1-6">Created date</div>
          <div class="w-1-6">Active Licenses</div>
          <div class="w-1-4"></div>
        </div>
        <div v-for="(tab,index) in tabs" :key="index">
          <div v-if="tab.active && tab.data.systems">
            <div v-for="system in tab.data.systems" :key="system.id"
            >
              <div
                  class="flex text-textColor w-full justify-between px-4 py-3 bg-secondary z-10 items-center"
                  :class="selectedSubSystem[system.id]!==undefined && selectedSubSystem[system.id]===true?'':'mb-2'">
                <div class="w-1-4 flex items-center z-30">
                <span class="mr-4 cursor-pointer  "
                      :class="selectedSubSystem[system.id]!==undefined && selectedSubSystem[system.id]===true?'transform rotate-90':''"
                      @click="openSubSystems(system)">
                  <Arrow/>
                </span>
                  <span>{{ system.system_name }}</span>
                </div>
                <div class="w-1-6">{{ system.id }}</div>
                <div class="w-1-6">{{ system.created_date }}</div>
                <div class="w-1-10">A{{ system.active_licenses }}</div>
                <div class="w-1-3 flex justify-end">
                  <button class="rounded bg-success text-white px-5 py-2 text-base h-auto mr-4">Add License</button>
                  <button class="rounded bg-danger text-white px-5 py-2 text-base h-auto">Remove</button>
                </div>
              </div>
              <div class="pl-4 flex mb-16"
                   v-if="selectedSubSystem[system.id]!==undefined && selectedSubSystem[system.id]===true">
                <div class="w-6 bg-secondary h-auto relative -top-8"></div>
                <div class="w-full mt-4">
                  <div class="flex w-full text-textColor opacity-60 text-xs w-full justify-between mb-2 ml-10">
                    <div class="w-1-3">Licenses</div>
                    <div class="w-1-3">Expires</div>
                    <div class="w-1-3"></div>
                  </div>
                  <div class="flex items-center"
                       v-for="(subSystem,index) in getSubsystems(tab.data.subsystems,system.id)" :key="index">
                    <div class="h-6 w-29 bg-secondary"></div>
                    <div
                        class="flex text-textColor w-full items-center justify-between px-4 py-3 bg-secondary mb-2">
                      <div class="w-1-3">{{ subSystem.licenses }}</div>
                      <div class="w-1-3">{{ subSystem.expires }}</div>
                      <div class="w-1-3 flex justify-end">
                        <button class="rounded bg-success text-white px-5 py-2 text-base h-auto mr-4">Add License
                        </button>
                        <button class="rounded bg-danger text-white px-5 py-2 text-base h-auto">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddSystems :show="hasFileUpload()"/>
  </div>
</template>

<script>

import Arrow from "./svg/Arrow";
import AddSystems from "./AddSystems";

export default {
  name: 'Systems',
  components: {AddSystems, Arrow},
  props: {
    tabs: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      selectedSubSystem: [],
      activeTab: null
    }
  },
  methods: {
    makeActive(tab, index) {
      this.activeTab = tab;
      this.$emit('makeActive', index)
    },
    openSubSystems(system) {
      let subsystem = Object.assign({}, this.selectedSubSystem)
      if (subsystem[system.id] !== undefined) {
        subsystem[system.id] = !subsystem[system.id]
      } else {
        subsystem[system.id] = true
      }
      this.selectedSubSystem = subsystem
    },
    getSubsystems(subSystems, id) {
      return subSystems.filter(item => item.system_id === id)
    },
    hasFileUpload() {
      return this.activeTab && this.activeTab.title === "Offline Activation";
    }
  }
}
</script>