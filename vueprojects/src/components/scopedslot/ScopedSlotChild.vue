<template>
    <slot :dataFromChild="childMessage"></slot>
</template>
<script>
export default {
    data(){
        return{
            childMessage:"scopedslot data transfer from child comp to parent comp"
        }
    }
}
</script>