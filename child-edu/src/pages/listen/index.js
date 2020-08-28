import { Icon, WingBlank, SearchBar, Flex } from "antd-mobile";
import React, { Component } from "react";
import img from "./image/u539.png";
import img01 from "./image/00.PNG";
import img02 from "./image/u757.png";
import img03 from "./image/u761.png";
import img04 from "./image/u769.png";
import img05 from "./image/1.PNG";
import img06 from "./image/u524.png";
import img07 from "./image/u497.png";
import img08 from "./image/u502.png";
import img09 from "./image/u508.png";
import img10 from "./image/u514.png";
import img_left from '../../assets/img/ipt_left.jpg'

export default class Listen extends Component {
  state = {
    concentration: [
      {
        img: img,
        text: "来自大自然最为",
      },
      {
        img: img,
        text: "来自大自然最为",
      },
      {
        img: img,
        text: "来自大自然最为",
      },
      {
        img: img,
        text: "来自大自然最为",
      },
      {
        img: img,
        text: "来自大自然最为",
      },
      {
        img: img,
        text: "来自大自然最为",
      },
    ],
    zhubo: [
      {
        img: img01,
        text: "妹叔讲故事",
        text1: "让孩子拥有幸福生活",
      },
      {
        img: img01,
        text: "妹叔讲故事",
        text1: "让孩子拥有幸福生活",
      },
      {
        img: img01,
        text: "妹叔讲故事",
        text1: "让孩子拥有幸福生活",
      },
      {
        img: img01,
        text: "妹叔讲故事",
        text1: "让孩子拥有幸福生活",
      },
    ],
    text: "+ 关注",
    listen: [
      {
        img: img02,
        text: "晚安宝贝 | 睡前故事",
        text1: "播放超过6亿的睡前儿童故事",
        text2: "120万",
        text3: "68集",
      },
      {
        img: img02,
        text: "晚安宝贝 | 睡前故事",
        text1: "播放超过6亿的睡前儿童故事",
        text2: "120万",
        text3: "68集",
      },
      {
        img: img02,
        text: "晚安宝贝 | 睡前故事",
        text1: "播放超过6亿的睡前儿童故事",
        text2: "120万",
        text3: "68集",
      },
      {
        img: img02,
        text: "晚安宝贝 | 睡前故事",
        text1: "播放超过6亿的睡前儿童故事",
        text2: "120万",
        text3: "68集",
      },
    ],
  };

  guanzhu = () => {
    this.setState({
      text: "已关注",
    });
  };

  goTo = (id) =>{
    this.props.history.push('/listenlist/ + id')
  }

  render() {
    return (
      <div>
        <WingBlank>
          <Flex
            style={{
              width: "100%",
              zIndex: 999,
              textAlign: "center",
            }}
          >
            <Flex.Item style={{ flex: 0.2 }}><img src={img_left} alt="" style={{width:"30px", height:"30px"}}/></Flex.Item>
            <Flex.Item style={{ flex: 0.6 }}>
              <SearchBar placeholder="搜索绘本" maxLength={8} />
            </Flex.Item>
            <Flex.Item style={{ flex: 0.2 }}>
              <Icon type="ellipsis" size="lg" />
            </Flex.Item>
          </Flex>
        </WingBlank>

        <div
          style={{
            width: "100%",
            height: "120px",
            boxShadow: "0px 1px 0px 0px #cccccc",
          }}
        >
          <Flex>
            <Flex.Item style={{ flex: 0.25, textAlign: "center" }}>
              <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                <img src={img07} />
              </div>
              <div style={{ fontSize: 12, marginBottom: "20px" }}>哄睡</div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.25, textAlign: "center" }}>
              <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                <img src={img08} />
              </div>
              <div style={{ fontSize: 12, marginBottom: "20px" }}>经典儿科</div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.25, textAlign: "center" }}>
              <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                <img src={img09} />
              </div>
              <div style={{ fontSize: 12, marginBottom: "20px" }}>学科教育</div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.25, textAlign: "center" }}>
              <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                <img src={img10} />
              </div>
              <div style={{ fontSize: 12, marginBottom: "20px" }}>全部分类</div>
            </Flex.Item>
          </Flex>
        </div>

        <WingBlank style={{ marginTop: "5%" }}>
          <span
            style={{ fontSize: "16px", fontWeight: "500", marginRight: "10px" }}
          >
            哄睡
          </span>
          <span style={{ color: "#cccccc" }}>用音乐唤醒宝贝，渐渐入眠</span>
          <div style={{ marginTop: "5%", position: "relative" }}>
            <img src={img06} />
            <div style={{ position: "absolute", top: "10px", right: "20px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                晚安
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  marginBottom: "20px",
                }}
              >
                每晚更新的，入眠精心好歌曲
              </p>
              <p style={{ color: "white" }}>《大胆的蜗牛》</p>
            </div>
          </div>
        </WingBlank>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#cccccc",
            marginTop: "5%",
          }}
        ></div>

        <WingBlank style={{ marginTop: "5%" }}>
          <div style={{ position: "relative" }}>
            <h3 style={{ position: "absolute" }}>小点精选</h3>
            <p style={{ position: "absolute", right: "0px", color: "#cccccc" }}>
              更多&nbsp;&gt;
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            {this.state.concentration.map((v) => (
              <div
                key={v.text}
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "33.3%",
                }} onClick={this.goTo.bind(this,v.id)}
              >
                <img src={v.img} alt={v.text}></img>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </WingBlank>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#cccccc",
            marginTop: "7%",
          }}
        ></div>

        <WingBlank style={{ marginTop: "5%" }}>
          <div style={{ position: "relative" }}>
            <h3 style={{ position: "absolute" }}>明星主播</h3>
            <p style={{ position: "absolute", right: "0px", color: "#cccccc" }}>
              更多&nbsp;&gt;
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.state.zhubo.map((v) => (
              <div
                key={v.text}
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "40%",
                  marginLeft: "5%",
                  height: "200px",
                  background: "#F5F5F5",
                  borderRadius: "10px",
                }}
              >
                <img src={v.img} alt={v.text}></img>
                <span style={{ fontSize: "16px" }}>{v.text}</span>
                <p style={{ fontSize: "12px", fontColor: "#cccccc" }}>
                  {v.text1}
                </p>
                <button
                  style={{ background: "#05CC94", borderRadius: "10px" }}
                  onClick={this.guanzhu}
                >
                  {this.state.text}
                </button>
              </div>
            ))}
          </div>
        </WingBlank>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#cccccc",
            marginTop: "7%",
          }}
        ></div>

        <WingBlank style={{ marginTop: "5%" }}>
          <div style={{ position: "relative", height: "20px" }}>
            <h3 style={{ position: "absolute" }}>大家都在听</h3>
            <p style={{ position: "absolute", right: "0px", color: "#cccccc" }}>
              更多&nbsp;&gt;
            </p>
          </div>
          <div>
            {this.state.listen.map((v) => (
              <div
                key={v.text}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  display: "flex",
                }}
              >
                <img src={v.img} alt={v.text}></img>
                <div style={{ marginLeft: "5%", marginTop: "3%" }}>
                  <p style={{ fontSize: "16px" }}>{v.text}</p>
                  <p
                    style={{
                      marginTop: "5%",
                      fontSize: "14px",
                      color: "#cccccc",
                      marginBottom: "15%",
                    }}
                  >
                    {v.text1}
                  </p>
                  <span style={{ marginRight: "15%" }}>
                    <img src={img03} />
                    {v.text2}
                  </span>
                  <span>
                    <img src={img04} />
                    {v.text3}
                  </span>
                  <span style={{ marginLeft: "19%" }}>
                    <img src={img05} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WingBlank>

        <div style={{ margin: "7% 33%", color: "#cccccc", fontSize: "16px" }}>
          没有更多内容啦~
        </div>
      </div>
    );
  }
}
