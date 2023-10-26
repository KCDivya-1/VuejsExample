<template>
<div> 
    <input :value="initialValue" @input="handleInput"/>{{initialValue}}
    <input :value="intialValue" @input="intialValue=$event"/>{{intialValue}}
    <input v-model="vmodelData"/>{{vmodelData}}
</div>
</template>
<script>
export default {
    data(){
        return{
            initialValue:"TWo Way Binding",
            intialValue:"intialValue=$event",
            vmodelData:"V-model"
        }
    },
    methods:{
     handleInput(event){
   this.initialValue=event.target.value
     }

    }
}
</script>