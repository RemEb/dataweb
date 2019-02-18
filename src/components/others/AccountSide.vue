<template>
    <div id="account">
        <a href="#"><img src="../../assets/photo.png"></a>
        <div class="account-text">
            <a href="#"><p>{{accountData.name}}</p></a>
            <p>{{accountData.role}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountSide",
        props:['accountData']
    }
</script>

<style scoped>
    #account {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1em;
    }

    #account img {
        margin: 10px;
        float: left;

    }

    .account-text {
        float: left;
        margin-right: 20px;
    }
    .account-text p:nth-child(1){
        font-weight:bold;
        margin-top:20px;
    }
    .account-text p:nth-child(2){
        color: gray;
    }
    .account-text p{
        margin: 0 0;
    }
    .account-text a {
        color: black;
    }
</style>