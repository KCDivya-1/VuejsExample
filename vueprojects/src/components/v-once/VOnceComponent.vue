<template>
<h2>V-Once one-time rendering of an element</h2>
    <p v-once>{{message}}</p>
    <p>{{dynamicMessage}}</p>
</template>
<script>
export default {
    data(){
        return{
            message:"v-once message ,This is a one-time rendered message",
            dynamicMessage:"This is a dynamically updated message"
        }
    }
}
</script>