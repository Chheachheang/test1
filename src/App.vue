<script setup lang="ts">
import router from './router';
import { useRoute, } from 'vue-router';


const route=useRoute();


const handal=()=>{
// router.push({path:"/about"})
//with params
// router.push({path:"/blogs" , params: { id: "123"}})

// Query
router.push({path: "about",query:{id:"123",user:"hieeeeeeeeeee"}})

}

</script>

<template>
  <!-- <h1>Hello</h1> -->
  
  <router-link to="/">Home</router-link>

  <router-link to="/about">About</router-link>
  <router-link to="/blogs">Blog</router-link>

  <h1>{{ route.name }}</h1>
  <button @click="handal">click To</button>
  <router-view></router-view>
</template>