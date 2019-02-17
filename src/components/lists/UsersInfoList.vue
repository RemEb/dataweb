<template>
    <div>
        <div class="info">
            <div class="row">
                <div class="col-md-3 card bg-primary text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        日期
                    </div>
                    <div class="info-data">
                        {{usersInfo.date}}
                    </div>
                </div>
                <div class="col-md-3 card bg-success text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-road" aria-hidden="true"></span></div>
                    <div class="info-title">
                        当天用户平均驾驶时间
                    </div>
                    <div class="info-data">
                        {{usersInfo.driveAverageTime}}小时
                    </div>
                </div>
                <div class="col-md-3 card bg-danger text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        平均健康情况
                    </div>
                    <div class="info-data">
                        {{usersInfo.healthInfo}}
                    </div>
                </div>
                <div class="col-md-3 card bg-warning text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        当前在线量
                    </div>
                    <div class="info-data">
                        {{usersInfo.onlineNumber}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "UsersInfoList",
        props: ['usersInfo'],
    }
</script>

<style scoped>
    .info {
        padding: 10px;
        font-size: 18px;
    }
    .info-icon{
        font-size: 35px;
    }
    .info-title{
        margin-left:40px ;
    }
    .info-data{
        margin-left: 48px;
        font-size: 23px;
        font-weight: bold;
        margin-top: 10px;
    }


</style>