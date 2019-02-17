<template>
    <div id="userMapChart" :style="{width: '700px', height: '500px'}"></div>
</template>

<script>
    export default {
        name: "UserMapChart",
        props: ['userMapData'],
        data: function () {
            return {}
        },

        mounted() {
            this.drawLine();
        },

        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('userMapChart'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '中国在线人数分布',
                        x: 'center'
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        roam: false,
                        // 定义样式
                        itemStyle: {
                            // 普通状态下的样式
                            normal: {
                                areaColor: '#ABCDEF99',
                                borderColor: '#fff'
                            },
                            // 高亮状态下的样式,默认黄色
                            emphasis: {
                                //areaColor: '#2a333d'
                            }
                        }

                    },
                    series: [
                        {
                            name: '热度', // series名称
                            type: 'scatter', // series图表类型
                            coordinateSystem: 'geo',// series坐标系类型

                            data: this.userMapData,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            //series样式
                            itemStyle: {
                                normal: {
                                    color: '#ddb926'
                                }
                            },
                            symbolSize: function (val) {//根据数值大小控制点的大小
                                return val[2] / 20;
                            },
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: this.userMapData,
                            symbolSize: function (val) {
                                return val[2] / 20;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#99CC99',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        }
                    ],

                    visualMap: {
                        type: 'continuous', // 连续型
                        min: 0,       		// 值域最小值，必须参数
                        max: 500,			// 值域最大值，必须参数
                        calculable: true,	// 是否启用值域漫游
                        inRange: {
                            color: ['#50a3ba', '#eac736', '#d94e5d']
                            // 指定数值从低到高时的颜色变化
                        },
                        textStyle: {
                            color: '#fff'	// 值域控件的文本颜色
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>