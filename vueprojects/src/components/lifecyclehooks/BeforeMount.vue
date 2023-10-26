<template>

    <div ref="greeting">Hello Readers!!!</div>
</template>
 

<script>
export default {
    setup(){
        console.log("I am Setup hook")
    },
    data(){
        console.log("I am data method ")
        return{
         name:"'data property'"
        }
    },
    computed:{
        checKComputed(){

      return "'I am computed method' "}
    },
    beforeCreate(){
        console.log("I am before Create hook")
        console.log("lets check data property Returning :",this.name)
        console.log("lets check computed property Returning :",this.checKComputed)
        console.log("before Create ends")
    },
    created(){
        console.log("I am Created hook")
        console.log("data property Returning :",this.name)
        this.name="'Lets check if we change the value of data proprty to some other'"
        console.log("data property update :",this.name)
        console.log("Computed Property Returning :",this.checKComputed)
        console.log("Created hook ends")
    },
    beforeMount(){
        console.log("I am beforeMount hook")
        console.log("DOM node is :",this.$refs["greeting"])
    }

}
</script>

