<!--地图信息展示模块-->
<template>
    <div>
        <div class="info">
            <div>
                <div class="card text-white info" style="background-color: rgb(3,67,121)">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-fire" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        活跃地区
                        <span class="info-data">{{mapInfoData.hotArea}}</span>
                    </div>

                </div>
                <div class="card text-white info" style="background-color: rgb(5,91,165)">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span></div>
                    <div class="info-title">
                        活跃地区在线数
                        <span class="info-data">{{mapInfoData.hotAreaOnlineUsers}}</span>
                    </div>
                </div>
                <div><br></div>
                <div class="card text-white info" style="background-color: rgb(3,67,121)">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        增长用户最多地区
                        <span class="info-data">{{mapInfoData.increaseFastestArea}}</span>
                    </div>

                </div>
                <div class="card text-white info" style="background-color: rgb(5,91,165)">
                    <div class="info-icon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </div>
                    <div class="info-title">
                        增长用户最多地区增长量
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