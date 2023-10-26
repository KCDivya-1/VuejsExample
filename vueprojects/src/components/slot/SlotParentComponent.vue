<template>
    <div>
<slot-child-component >
    <template v-slot:childSlot>
        <p>{{message}}</p></template>
</slot-child-component>
    </div>
</template>
<script>
import SlotChildComponent from './SlotChildComponent.vue'
export default {
    components:{
        SlotChildComponent
    },
    data(){
        return{
            message:"SlotData transfer from parent comp to child comp"
        }
    }
}
</script>