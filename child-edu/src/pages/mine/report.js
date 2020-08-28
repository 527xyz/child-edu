import React, { Component } from "react";
import { NavBar, Icon, WingBlank } from 'antd-mobile';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Report extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '每天阅读时间统计' },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        });

        var bing = echarts.init(document.getElementById('bing'));
        // 绘制图表
        bing.setOption({
            title: { text: '统计不同分类阅读书籍数' },
            tooltip: {},
            xAxis: {
                data: ["健康", "性格", "学霸", "人际", "安全", "名家"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  
    render() {
    return (
      <div style={{ height: "110vh", width: "100vw", backgroundColor: "white" }}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.goBack()}}
        >
          阅读报告
        </NavBar>
        <WingBlank style={{marginTop:"15px", fontSize:"16px"}}>阅读时间</WingBlank>
        <WingBlank><div id="main" style={{ width: "100%", height: "300px" }}></div></WingBlank>

        <div style={{width:"100%", height:"1px", background:"#cccccc"}}></div>

        <WingBlank style={{marginTop:"15px", fontSize:"16px"}}>阅读分类统计</WingBlank>
        <WingBlank><div id="bing" style={{ width: "100%", height: "300px" }}></div></WingBlank>
      </div>
    );
  }
}
