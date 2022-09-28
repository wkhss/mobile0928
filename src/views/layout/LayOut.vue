<template>
    <div>
        <!-- 展示主题内容 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <TabBar/>
    </div>
</template>
<script lang="ts" setup>
import TabBar from "@/components/tabbar/TabBar.vue"; 

</script>
<style lang="scss" scoped>
    
</style>