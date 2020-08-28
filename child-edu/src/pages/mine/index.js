import React, { Component } from "react";
import { WingBlank, Card, Flex } from "antd-mobile";
import img from "./image/00.PNG";
import img01 from "./image/u899.png";
import img02 from "./image/u836.png";
import img03 from "./image/u845.png";
import img04 from "./image/u849.png";
import img05 from "./image/u857.png";
import img06 from "./image/u861.png";
import img07 from "./image/u864.png";
import img08 from "./image/u867.png";
import img09 from "./image/u870.png";
import img10 from "./image/u877.png";
import img11 from "./image/u883.png";
import img12 from "./image/u888.png";
import img13 from "./image/u893.png";
import img14 from "./image/u898.png";

export default class Mine extends Component {
  constructor(props){
    super(props)
  }
  
  handleClick=()=>this.props.history.push('/report')


    render() {
    return (
      <div style={{ height: "120vh", width: "100vw", backgroundColor: "white" }}>
        <WingBlank style={{ position: "relative" }}>
          <p style={{ position: "absolute", right: "0px", top: "30px" }}>
            <img src={img01} />
          </p>
          <p style={{ position: "absolute", left: "0px", top: "60px" }}>
            <img src={img02} />
          </p>
          <div style={{ position: "absolute", right: "10%", top: "65px" }}>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "500",
                marginRight: "15px",
              }}
            >
              小点家长
            </span>
            <span>
              <img src={img03} />
            </span>
            <span style={{ fontWeight: "400", fontSize: "12px", marginLeft:"5px" }}>
              立即成为会员
            </span>
            <div style={{ marginTop: "18px" }}>
              <img src={img} />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "160px",
              width: "100%",
              height: "50px",
              backgroundColor: "#F4DBB2",
              borderRadius: "5px",
              lineHeight: "50px",
              textAlign: "center",
            }}
          >
            <img src={img04} />
            <span style={{ marginLeft: "2%", marginRight: "3%" }}>
              加入会员立享伴读特权、绘本畅读
            </span>
            <button
              style={{
                backgroundColor: "#CCCCCC",
                fontColor: "#EEC98B",
                borderRadius: "10px",
              }}
            >
              立即购买
            </button>
          </div>

          <Card style={{posiiton:"absolute", top:"230px"}}>
            <Card.Header
              title="添加宝宝"
              thumb={img05}
              extra={<span style={{fontSize:"12px"}}>推荐宝宝所喜欢的绘本</span>}
            />
            <Card.Body>
            <Flex>
                <Flex.Item style={{flex:.25, textAlign:"center"}}>
                  <div style={{marginBottom:"10px",marginTop:"20px"}}><img src={img06}/></div>
                  <div style={{fontSize:12, marginBottom:"20px"}}>宝宝书架</div>
                </Flex.Item>
                <Flex.Item style={{flex:.25, textAlign:"center"}}>
                  <div style={{marginBottom:"10px",marginTop:"20px"}}><img src={img07}/></div>
                  <div style={{fontSize:12, marginBottom:"20px"}}>K绘本</div>
                </Flex.Item>
                <Flex.Item style={{flex:.25, textAlign:"center"}}>
                  <div style={{marginBottom:"10px",marginTop:"20px"}}><img src={img08}/></div>
                  <div style={{fontSize:12, marginBottom:"20px"}}>听听收藏</div>
                </Flex.Item>
                <Flex.Item style={{flex:.25, textAlign:"center"}}>
                  <div style={{marginBottom:"10px",marginTop:"20px"}}><img src={img09}/></div>
                  <div style={{fontSize:12, marginBottom:"20px"}}>最近播放</div>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>

          <div style={{position:"absolute", top:"410px", width:"100%", height:"30px", borderBottom:"1px solid #cccccc", fontSize:"16px",}}>设备管理</div>
          <div style={{position:"absolute", top:"450px", width:"100%", height:"30px"}}>
              <img src={img10}/>
              <span style={{marginLeft:"3%", marginRight:"76.5%"}}>未联网</span>
              <span>&gt;</span>
          </div>
        </WingBlank>
        
        <div style={{width:"100%", height:"4px", background:"#F2F2F2", marginTop:"325px"}}></div>

        <WingBlank>
        <div style={{width:"100%", height:"50px", lineHeight:"50px", borderBottom:"1px solid #cccccc", position:"relative"}} onClick={this.handleClick}>
              <img src={img11}/>
              <span style={{marginLeft:"3%"}}>阅读报告</span>
              <span style={{position:"absolute", right:"0px"}}>&gt;</span>
          </div>
          <div style={{width:"100%", height:"50px", lineHeight:"50px", borderBottom:"1px solid #cccccc", position:"relative"}}>
              <img src={img12}/>
              <span style={{marginLeft:"3%"}}>我的购买</span>
              <span style={{position:"absolute", right:"0px"}}>&gt;</span>
          </div>
          <div style={{width:"100%", height:"50px", lineHeight:"50px", position:"relative"}}>
              <img src={img13}/>
              <span style={{marginLeft:"3%"}}>我的钱包</span>
              <span style={{position:"absolute", right:"0px"}}>&gt;</span>
          </div>
        </WingBlank>

        <div style={{width:"100%", height:"4px", background:"#F2F2F2"}}></div>

        <WingBlank>
        <div style={{width:"100%", height:"50px", lineHeight:"50px",position:"relative"}}>
              <img src={img14}/>
              <span style={{marginLeft:"3%"}}>意见反馈</span>
              <span style={{position:"absolute", right:"0px"}}>&gt;</span>
          </div>
        </WingBlank>
      </div>
    );
  }
}
