<template>
<ChildComponent :parentToChild="message" :data="users" :alertMsg="getAlert"></ChildComponent>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
    components:{
ChildComponent
    },
    data(){
        return{
            message:"Message from Parent Component to Child comp",
            users:{name:"kc",email:"divya.kc@test.com"}

        }
    },
    methods:{
     getAlert(){
         alert("I am Function Prop")
     }
    }
}
</script>
