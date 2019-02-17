<template>
    <div>
        <div class="info">
            <div>
                <div class="card bg-primary text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-fire" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        活跃城市
                        <span class="info-data">{{mapInfoData.hotCity}}</span>
                    </div>

                </div>
                <div class="card bg-success text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span></div>
                    <div class="info-title">
                        活跃城市在线数
                        <span class="info-data">{{mapInfoData.hotCityOnlineUsers}}</span>
                    </div>
                </div>
                <div class="card bg-danger text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        增长用户最多城市
                        <span class="info-data">{{mapInfoData.increaseFastestCity}}</span>
                    </div>

                </div>
                <div class="card bg-warning text-white info">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        增长用户最多城市增长量
                        <span class="info-data">{{mapInfoData.increaseNumber}}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MapInfoList",
        props: ['mapInfoData'],
    }
</script>

<style scoped>
    .info {
        padding: 15px;
        font-size: 18px;
    }

    .info-icon {
        font-size: 35px;
    }

    .info-title {
        margin-left: 40px;
    }

    .info-data {
        margin-left: 48px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }

</style>