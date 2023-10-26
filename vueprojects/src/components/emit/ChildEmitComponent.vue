<template>
<div><button @click="customEvent">Click me Emit Event</button></div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        customEvent(){
            this.$emit('custom-emit-event',"data transfer from child comp to parent comp")
        }
    }
}
</script>