import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#777',
        },
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1],
        },
    },
    series: [
        {
            name: 'Visit source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: 'direct interview' },
                { value: 310, name: 'Email marketing' },
                { value: 274, name: 'affiliate advertising' },
                { value: 235, name: 'video ads' },
                { value: 400, name: 'search engine' },
            ].sort(function(a, b) {
                return a.value - b.value;
            }),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: '#777',
                    },
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#777',
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: '#777',
                },
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx: any) {
                return Math.random() * 200;
            },
        },
    ],
};

const EchartsPie = () => (
    <ReactEcharts
        option={option}
        style={{ height: '300px', width: '100%' }}
        className={'react_for_echarts'}
    />
);

export default EchartsPie;
