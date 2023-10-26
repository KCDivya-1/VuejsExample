 

<script>
export default {
    setup(){
        console.log("I am Setup hook")
    },
    data(){
        console.log("I am data method ")
        return{
         name:" I am Data property"
        }
    },
    computed:{
        checKComputed(){

      return "I am computed method "}
    },
    beforeCreate(){
        console.log("I am before Create hook")
         console.log("lets check data property Returning",this.name)
        console.log("lets check computed property Returning",this.checKComputed)
        console.log("before Create ends")
    }

}
</script>

