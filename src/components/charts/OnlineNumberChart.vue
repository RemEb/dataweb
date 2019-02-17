<template>
    <div>
        <div id="OnlineNumberChart" :style="{width: '500px', height: '400px'}"></div>
    </div>
</template>

<script>
    /**
     * 当前时刻至10小时前的波形图
     */
    export default {
        name: "OnlineNumberChart",
        props: ['onlineData'],
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('OnlineNumberChart'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '本周峰值在线人数变化',
                        x: 'center'
                    },

                    //图例名
                    legend: {
                        top: 30,
                        data: ['本周峰值在线人数', '上周峰值在线人数']
                    },
                    grid: {
                        left: '3%',   //图表距边框的距离
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    //x轴信息样式
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        //坐标轴颜色
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(15,140,248)'
                            }
                        },
                        //x轴文字旋转
                        axisLabel: {
                            rotate: 30,
                            interval: 0
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(15,140,248)'
                            }
                        },
                    },
                    series: [
                        //实线
                        {
                            name: '本周峰值在线人数',
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 8,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(15,140,248)',
                                    borderColor: 'rgb(15,140,248)',  //拐点边框颜色
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                }
                            },
                            data: this.onlineData.thisWeekData
                        },
                        //虚线
                        {
                            name: '上周峰值在线人数',
                            type: 'line',
                            symbolSize: 8,   //拐点圆的大小
                            color: ['rgb(15,140,248)'],  //折线条的颜色
                            data: this.onlineData.lastWeekData,
                            smooth: false,   //关键点，为true是不支持虚线的，实线就用true
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 2,
                                        type: 'dotted'  //'dotted'虚线 'solid'实线
                                    }
                                }
                            },
                        },


                    ]
                });
            }
        }
    }
</script>

<style scoped>

</style>