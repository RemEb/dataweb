<!--整体页面
    包括模拟数据，
    传递给各个模块
-->
<template>
    <div id="charts">
        <Head></Head>
        <AccountSide :account-data="accountData"></AccountSide>
        <div id="data">
            <div class="data-box card">
                <h2>用户信息总览</h2>
                <div style="margin: 10px">
                    <UserInfoList :users-info="userInfoData"></UserInfoList>
                </div>
            </div>
            <div class="data-box card">
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
            <div class="data-box card">
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
    import MapInfoList from "./lists/MapInfoList";
    import AccountSide from "./others/AccountSide"

    export default {
        name: 'chart',
        components: {
            Head,
            UserInfoList,
            AbnormalInfoChart,
            AgeChart,
            OnlineNumberChart,
            UserMapChart,
            MapInfoList,
            AccountSide
        },

        created:function() {
            this.$axios.get("/apis/space/query?parkingLotId=a2e402e56fbd4d57b5c0d2ada8330fa0")
                .then(res => {
                    window.console.log("success");
                    window.console.log(res.data.data)
                }, res => {
                    window.console.log("Request Fail");
                })
        },

        mounted: function () {
            // this.testApi();
        },

        data: function () {
            let date = new Date();
            //this.getAPIData();

            //这里使用模拟数据来表现页面效果
            let userInfoData = {
                driveAverageTime: 1.5,
                healthInfo: "良好",
                date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
                onlineNumber: 107878,
                onLineNumber: [15364, 12686, 12265, 11593, 15323, 15668, 16294, 13275, 14552, 18553], // 动态获取10小时前在线人数

            };
            let userMapData = [
                {name: '江苏省', value: [118.76741, 32.041546, 15652]},
                {name: '河南省', value: [113.665413, 34.757977, 3542]},
                {name: '辽宁省', value: [123.429092, 41.796768, 5232]},
                {name: '北京市', value: [116.405289, 39.904987, 7252]},
                {name: '宁夏省', value: [106.232480, 38.486440, 2854]},
                {name: '上海市', value: [121.109426, 31.442531, 8653]},
                {name: '山西省', value: [112.549248, 37.857014, 10223]},
                {name: '吉林省', value: [125.324501, 43.886841, 3223]},
                {name: '黑龙江省', value: [126.642464, 45.756966, 1393]},
                {name: '天津市', value: [117.190186, 39.125595, 6975]},
                {name: '内蒙古', value: [111.751990, 40.841490, 1551]},
                {name: '河南省', value: [113.665413, 34.757977, 7521]},
                {name: '陕西省', value: [108.948021, 34.263161, 5684]},
                {name: '湖北省', value: [114.298569, 30.584354, 8541]},
                {name: '安徽省', value: [117.283043, 31.861191, 6354]},
                {name: '湖南省', value: [112.982277, 28.19409, 2340]},
                {name: '江西省', value: [115.892151, 28.676493, 1162]},
                {name: '福建省', value: [119.306236, 26.075302, 2298]},
                {name: '广东省', value: [113.28064, 23.125177, 4421]},
                {name: '重庆市', value: [106.504959, 29.533155, 903]},
                {name: '云南省', value: [102.71225, 25.040609, 1123]},
                {name: '贵州省', value: [106.713478, 26.578342, 2512]},
                {name: '四川省', value: [104.065735, 30.659462, 3095]},
                {name: '甘肃省', value: [103.834170, 36.061380, 531]},
                {name: '浙江省', value: [120.15358, 30.287458, 12354]},
                {name: '西藏', value: [91.11450, 29.644150, 112]},
                {name: '新疆', value: [87.616880, 43.826630, 168]},
                {name: '香港', value: [114.165460, 22.275340, 112]},
                {name: '澳门', value: [113.549130, 22.198750, 87]},
                {name: '青海省', value: [101.777820, 36.617290, 429]},
            ];
            let ageData = [
                {value: 123533, name: '18-25岁'},
                {value: 265425, name: '25-35岁'},
                {value: 82525, name: '35-45岁'},
                {value: 25264, name: '45-55岁'},
                {value: 2023, name: '55-60岁'},
                {value: 136565, name: '其他'}
            ];
            let abnormalInfoData = [
                {value: 10, name: '体温异常'},
                {value: 5, name: '心率异常'},
                {value: 15, name: '血糖异常'},
                {value: 15, name: '血压异常'},
                {value: 23, name: '血脂异常'},
                {value: 25, name: '加速度异常'},
                {value: 20, name: '车内环境异常'},
                {value: 35, name: '其他'},
            ];
            let onlineData = {
                thisWeekData: [95694, 114536, 85421, 86586, 115645, 172565, 133231],
                lastWeekData: [106694, 104536, 115421, 96586, 95645, 152565, 163231]
            };
            let mapInfoData = {
                hotArea: "江苏省",
                hotAreaOnlineUsers: 15652,
                increaseFastestArea: "上海市",
                increaseNumber: 3521
            };
            let accountData = {
                name: "Bessie Berry",
                role: "管理员",
            };

            return {
                userInfoData: userInfoData,
                ageData: ageData,
                abnormalInfoData: abnormalInfoData,
                userMapData: userMapData,
                onlineData: onlineData,
                mapInfoData: mapInfoData,
                accountData: accountData,
            }
        },
        methods: {


            testApi() {
                this.$http.get('http://www.lvchengyi.club:8011/space/query?parkingLotId=a2e402e56fbd4d57b5c0d2ada8330fa0')
                    .then(response => {
                        response.setHeader("Access-Control-Allow-Origin", "*");
                        window.console.log(response.data);
                    })
            }


        }
    }

</script>

<style scoped>
    #data {
        margin: 10px;
    }

    h2 {
        margin: 10px;
    }

    .data-box {
        margin-top: 20px;
    }

</style>