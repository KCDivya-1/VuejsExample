<template>
  <div @mouseover="increment">Hover:{{counter}}</div>
</template>

<script>
import CounterMixin from '@/mixins/CounterMixin'
export default {

    mixins:[CounterMixin]
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