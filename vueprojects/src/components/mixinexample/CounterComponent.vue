<template>
  <div @click="increment">Click:{{counter}}</div>
</template>

<script>
import counterMixin from '@/mixins/CounterMixin'

export default {
    mixins:[counterMixin]
// data(){
//     return{
//         counter:0
//     }
// },
// methods:{
//     increment(){
//         this.counter++
//     }
// }
}
</script>

<style>

</style>