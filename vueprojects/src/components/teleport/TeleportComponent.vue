<template>
    <div>
        <button @click="toggalModal">OpenModal</button>
        <teleport to="body">
            <div v-if="showModal" class="modal">
                <h2>Modal Content</h2>
                <button @click="closeModal">CloseModal</button>
            </div>
        </teleport>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showModal:false
        }
    },
    methods:{
        toggalModal(){
         this.showModal=!this.showModal
        },
       closeModal(){
 this.showModal=false
       }
    }
}
</script>
<style>
/* Style for the modal */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>