<template>
<div>
    <input :value="initialValue"/><!-- v-bind:value="initialValue"-->
    {{initialValue}}
</div>
</template>
<script>
export default {
    data(){
        return{
            initialValue:"one way Binding"
        }
    }
}
</script>