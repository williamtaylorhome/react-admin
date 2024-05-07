import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: '',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12,
            },
        },
    },
    legend: {
        x: 'center',
        show: false,
        data: ['friend', 'Comradrelative', '亲戚'],
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
                {
                    name: 'friend',
                    itemStyle: {
                        normal: {
                            color: '#009800',
                        },
                    },
                },
                {
                    name: 'Comrades',
                    itemStyle: {
                        normal: {
                            color: '#4592FF',
                        },
                    },
                },
                {
                    name: 'relative',
                    itemStyle: {
                        normal: {
                            color: '#3592F',
                        },
                    },
                },
            ],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            force: {
                repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10,
                    },
                    formatter: '{c}',
                },
            },
            data: [
                {
                    name: 'Xu Jianyun',
                    draggable: true,
                },
                {
                    name: 'Feng Keliang',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Tang Chi Wing',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Li Rongqing',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Zheng Zhiyong',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Zhao Yingjie',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Wang Chengjun',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Chen Weidong',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Zou Jinsong',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Zhao Cheng',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Chen Xianzhong',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Tao Yong',
                    category: 1,
                    draggable: true,
                },
                {
                    name: 'Wang Defu',
                    category: 1,
                    draggable: true,
                },
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    category: 0,
                    value: 'friend',
                },
                {
                    source: 0,
                    target: 2,
                    value: 'Comrades',
                },
                {
                    source: 0,
                    target: 3,
                    value: 'landlord',
                },
                {
                    source: 0,
                    target: 4,
                    value: 'friend',
                },
                {
                    source: 1,
                    target: 2,
                    value: 'cousin',
                },
                {
                    source: 0,
                    target: 5,
                    value: 'friend',
                },
                {
                    source: 4,
                    target: 5,
                    value: 'aunt',
                },
                {
                    source: 2,
                    target: 8,
                    value: 'uncle',
                },
                {
                    source: 0,
                    target: 12,
                    value: 'friend',
                },
                {
                    source: 6,
                    target: 11,
                    value: 'spouse',
                },
                {
                    source: 6,
                    target: 3,
                    value: 'friend',
                },
                {
                    source: 7,
                    target: 5,
                    value: 'friend',
                },
                {
                    source: 9,
                    target: 10,
                    value: 'friend',
                },
                {
                    source: 3,
                    target: 10,
                    value: 'friend',
                },
                {
                    source: 2,
                    target: 11,
                    value: 'classmate',
                },
            ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0,
                },
            },
        },
    ],
};
class EchartsForce extends Component {
    render() {
        return (
            <ReactEcharts
                option={option}
                style={{ height: '400px', width: '100%' }}
                className={'react_for_echarts'}
            />
        );
    }
}

export default EchartsForce;
