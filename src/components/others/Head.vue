<!--头部模块-->
<template>
    <div class="header">
        <div class="bg_header">
            <h1>车行宝数据管理平台</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head"
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 80px;
        padding:0 20px;
        min-width: 1366px;
        text-align: center;
    }
    .bg_header {
        width: 100%;
        height: 80px;
        background: url(../../assets/title.png) no-repeat;
        background-size: 100% 100%;
    }
</style>