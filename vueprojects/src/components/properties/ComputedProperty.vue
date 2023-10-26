<template>
<div>
<p>
before Compute:{{value}}</p>
<p>Compute:{{checkCompute}}</p>
</div>
</template>
<script>
export default{
data(){
    return{
value:5
    }
},
computed:{
checkCompute(){
    return this.value*5
}
}
}
</script>