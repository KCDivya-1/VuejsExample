<template>
   <h1>Props: {{parentToChild}}</h1>
   <h2>{{data.email}}</h2>
   <button @click="alertMsg">Click Me</button>
</template>
<script>


export default {
    props:{parentToChild:String,data:Object,alertMsg:Function}
    // data(){
    //     return{
    //         parentToChild:''
    //     }
    // }
}
</script>
