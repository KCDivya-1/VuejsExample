const counterMixin={
    data(){
        return{
            counter:0
        }
    },
    methods:{
        increment(){
            this.counter++
        }
    }
}
export default counterMixin