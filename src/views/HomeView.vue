<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="">
      </div>
      <div>{{mount}}</div>
    </div>
    <!-- <TabBar/> -->
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent,ref } from "vue";
import { ref } from "vue";
import {home_http} from '@/api/httpHome';
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import TabBar from "@/components/tabbar/TabBar.vue"; 
let mount=ref('seec')

// 封装业务函数
gethome()
async function gethome() {
  let {data}=await home_http()
  console.log(data);
  
}

// export default defineComponent({
//   name: "HomeView",
//   components: {
//     // HelloWorld,
//     TabBar,
//   },
//   setup(){
//     let mount=ref('seec');
//     return{
//       mount,
//     }
//   }
// });
</script>
<style lang="scss" scoped>
.home{
  .nav{
    .pic{
      width: 375px;
      height: 296px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
