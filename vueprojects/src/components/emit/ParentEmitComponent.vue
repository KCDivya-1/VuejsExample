<template>
    <div>
        {{message}}
        <child-emit-component-vue @custom-emit-event="handleEmit"></child-emit-component-vue>
    </div>
</template>
<script>
import ChildEmitComponentVue from './ChildEmitComponent.vue'
export default {
    components:{
 ChildEmitComponentVue

    },
    data(){
        return{
message:''
        }
    },
    methods:{
        handleEmit(data){
            this.message=`Recieved data:${data}`
        }
    }
}
</script>