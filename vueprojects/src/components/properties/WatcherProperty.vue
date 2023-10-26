<template>
<div>
<p>Watcher Value:{{value}}</p></div>
</template>
<script>
export default{
data(){
    return{
value:12
    }
},
watcher:{
    value(newValue,oldValue){
        console.log(`New Value:${newValue}-Old Value:${oldValue}`)
    }
}
}
</script>