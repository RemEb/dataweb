<template>
    <div id="charts">
        <Head></Head>
        <div id="data">
            <div class="all-users">
                <h2>用户信息总览</h2>
                <UserInfoList :users-info="userInfoData"></UserInfoList>
            </div>
            <div class="users-analysis">
                <h2>用户情况分析</h2>
                <div class="row">
                    <div class="col-md-4">
                        <AbnormalInfoChart :abnormal-info-data="abnormalInfoData"></AbnormalInfoChart>
                    </div>
                    <div class="col-md-3">
                        <AgeChart :age-data="ageData"></AgeChart>
                    </div>
                    <div class="col-md-5">
                        <OnlineNumberChart :online-data="onlineData"></OnlineNumberChart>
                    </div>
                </div>
            </div>
            <div class="all-online">
                <h2>在线总览</h2>
                <div class="row">
                    <div class="col-md-7">
                        <UserMapChart :user-map-data="userMapData"></UserMapChart>
                    </div>
                    <div class="col-md-5">
                        <MapInfoList :map-info-data="mapInfoData"></MapInfoList>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Head from './others/Head';
    import UserInfoList from './lists/UsersInfoList';
    import OnlineNumberChart from './charts/OnlineNumberChart';
    import AgeChart from './charts/AgeChart';
    import AbnormalInfoChart from './charts/AbnormalInfoChart';
    import UserMapChart from "./charts/UserMapChart";
    import MapInfoList from  "./lists/MapInfoList"

    export default {
        name: 'chart',
        components: {
            Head,
            UserInfoList,
            AbnormalInfoChart,
            AgeChart,
            OnlineNumberChart,
            UserMapChart,
            MapInfoList
        },
        data: function () {
            let date = new Date();

            let userInfoData = {
                driveAverageTime: 1.5,
                healthInfo: "良好",
                date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
                onlineNumber: 8568,
                ageLevelOne: 0.3, // 18-25岁比例
                ageLevelTwo: 0.4, //25-35岁比例
                ageLevelThree: 0.2, // 35-45岁比例
                ageLevelFour: 0.1,// 45-60岁比例
                onLineNumber: [15364, 12686, 12222, 11523, 15323, 15668, 16224, 13225, 14552, 18553], // 动态获取10小时前在线人数

            };
            let userMapData = [
                {name: '海门', value: [111.15, 31.89, 200]},
                {name: '鄂尔多斯', value: [109.781327, 39.608266, 100]},
                {name: '招远', value: [129.38, 37.35, 100]},
                {name: '舟山', value: [122.207216, 29.985295, 500]},
                {name: '北京', value: [122.207216, 29.985295, 400]},
                {name: '上海', value: [121.109426, 31.442531, 300]},
                {name: '苏州', value: [120.619585, 31.299379, 200]},
            ];
            let ageData = [
                {value: 335, name: '18-25岁'},
                {value: 341, name: '25-35岁'},
                {value: 310, name: '35-45岁'},
                {value: 135, name: '45-55岁'},
                {value: 89, name: '55-60岁'},
                {value: 232, name: '其他'}
            ];
            let abnormalInfoData = [
                {value: 10, name: '体温异常'},
                {value: 5, name: '心率异常'},
                {value: 15, name: '血氧异常'},
                {value: 25, name: '加速度异常'},
                {value: 20, name: '车内环境异常'},
                {value: 35, name: '其他'},
            ];
            let onlineData = {
                thisWeekData: [220, 182, 191, 234, 290, 330, 310],
                lastWeekData: [800, 300, 500, 800, 300, 600, 500]
            };
            let mapInfoData = {
                hotCity:"南京",
                hotCityOnlineUsers:4548,
                increaseFastestCity:"苏州",
                increaseNumber:1684
            };


            return {
                userInfoData: userInfoData,
                ageData: ageData,
                abnormalInfoData: abnormalInfoData,
                userMapData: userMapData,
                onlineData: onlineData,
                mapInfoData: mapInfoData
            }
        }
    }

</script>

<style scoped>
    #data {
        margin: 10px;
    }

    h2 {
        margin: 20px;
    }

</style>