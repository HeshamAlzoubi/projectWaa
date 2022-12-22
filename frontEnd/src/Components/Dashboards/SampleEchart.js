import React from 'react';
import ReactECharts from 'echarts-for-react';

const SampleEchart =  (props) => {
  const option = {
    title: {
      text: props.title
    },
    tooltip : {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      data: props.label
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.data,
        type: "bar",
        smooth: true
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default SampleEchart;