<template>
  <ParentComponent/>
  <SlotParentComponentVue/>
  <ScopedSlotParentVue/>
  <TeleportComponentVue/>
  <ParentFragamentVue/>
  <VOnceComponent/>
  <OneWayBindingComponentVue/>
  <TwoWayBindingVue/>
  <ParentEmitComponentVue/>
  <!-- <BeforeCreateVue/> -->
  <ImportedHooksVue/>
  <HoverComponentVue/>
<CounterComponentVue/>
<ComputedProperty/>
<WatcherProperty/>
</template>

<script>
import CounterComponentVue from './components/mixinexample/CounterComponent.vue'
import HoverComponentVue from './components/mixinexample/HoverComponent.vue'
import OneWayBindingComponentVue from './components/bindings/OneWayBindingComponent.vue'
import TwoWayBindingVue from './components/bindings/TwoWayBinding.vue'
import ParentEmitComponentVue from './components/emit/ParentEmitComponent.vue'
import ParentFragamentVue from './components/fragment/ParentFragament.vue'
import ImportedHooksVue from './components/lifecyclehooks/ImportedHooks.vue'
//import BeforeCreateVue from './components/lifecyclehooks/BeforeCreate.vue'
import ParentComponent from './components/props/ParentComponent.vue'
import ScopedSlotParentVue from './components/scopedslot/ScopedSlotParent.vue'
import SlotParentComponentVue from './components/slot/SlotParentComponent.vue'
import TeleportComponentVue from './components/teleport/TeleportComponent.vue'
import VOnceComponent from './components/v-once/VOnceComponent.vue'
import ComputedProperty from './components/properties/ComputedProperty.vue'
import WatcherProperty from './components/properties/WatcherProperty.vue'

export default {
  name: 'App',
  components: {
   
    ParentComponent,
SlotParentComponentVue,
ScopedSlotParentVue,
TeleportComponentVue,
ParentFragamentVue,
VOnceComponent,
OneWayBindingComponentVue,
TwoWayBindingVue,
 ParentEmitComponentVue ,
 //BeforeCreateVue
 ImportedHooksVue,
HoverComponentVue,
CounterComponentVue,
ComputedProperty,
WatcherProperty

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
