<template>
    <UserDropdownItem :text="nameUser" icon="customer" />
</template>

<script>
import UserDropdownItem from '../UserDropdownItem/UserDropdownItem.vue'
export default {
  components: { UserDropdownItem },
  data(){
    return{
      nameUser:""
    }
  },
  mounted(){
    this.getdata()
  },
  methods:{
    getdata(){
       this.nameUser = JSON.parse(localStorage.getItem("dataLogin")).name;
    }
   
  }
}
</script>