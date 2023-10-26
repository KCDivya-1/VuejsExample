<template>
    <scoped-slot-child>
        <template v-slot:default="scopeSlot"><h2>Scoped Slot </h2><p>{{scopeSlot.dataFromChild}} </p></template>
        </scoped-slot-child>
</template>
<script>
import ScopedSlotChild from "./ScopedSlotChild.vue"
export default {
components:{
ScopedSlotChild
},
    data(){

    }
}
</script>