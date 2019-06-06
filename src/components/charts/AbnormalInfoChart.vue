<!--异常信息模块-->
<template>
    <div>
        <div id="AbnormalInfoChart" :style="{width: '500px', height: '400px'}"></div>
    </div>

</template>

<script>
    export default {
        name: "AbnormalInfoChart",
        props: ['abnormalInfoData'],
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('AbnormalInfoChart'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '用户异常信息统计',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x: 'center',
                        y: 'bottom',
                        bottom: 50,
                        data: ['体温异常', '心率异常', '血氧异常', '加速度异常', '车内环境异常', '其他']
                    },
                    calculable: true,
                    series: [
                        {
                            type: 'pie',
                            radius: [20, 22],
                            slient: true,
                            animation: false,
                            label: {
                                normal: {show: false}
                            },
                            labelLine: {
                                normal: {show: false}
                            },
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ccc',
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                }
                            },
                            data: [
                                {value: 100, name: ''}
                            ]
                        },
                        {
                            type: 'pie',
                            radius: [120, 122],
                            slient: true,
                            animation: false,
                            label: {
                                normal: {show: false}
                            },
                            labelLine: {
                                normal: {show: false}
                            },
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#bbb',
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                }
                            },
                            data: [
                                {value: 100, name: ''}
                            ]
                        },
                        {
                            name: '异常信息',
                            type: 'pie',
                            radius: [30, 110],
                            roseType: 'area',
                            x: '50%',               // for funnel
                            max: 40,                // for funnel
                            sort: 'ascending',     // for funnel
                            data: this.abnormalInfoData,
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped>

</style>