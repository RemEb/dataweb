<template>
    <div>
        <div id="AgeChart" :style="{width: '300px', height: '400px'}"></div>
    </div>
</template>

<script>
    export default {

        name: "AgeChart",
        props: ['ageData'],
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('AgeChart'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '用户年龄分布',
                        x: 'center'
                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 400,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '年龄分布',
                            type: 'pie',
                            radius: '55%',
                            data: this.ageData,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgb(15,140,248)',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                                }
                            }
                        },
                    ]
                })
                ;
            }
        }
    }
</script>

<style scoped>

</style>