import React, { Component } from "react";
import { Button, WhiteSpace, Flex } from "antd-mobile";
import "./login.css";
import img from "./image/01.PNG";
import img01 from "./image/u539.png";
import img02 from "./image/u58.png";
import img03 from "./image/u65.png";
import img04 from "./image/u79.png";
import img05 from "./image/u83.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => this.props.history.push("/reg");

  handleToClick = () => this.props.history.push("/home");


  render() {
    return (
      <div>
        <img src={img01} style={{ display: "block", margin: "15% auto" }} />
        <div style={{ marginTop: "20%", padding: "0 10%" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              borderBottom: "1px solid #000000",
              marginTop: "40px",
            }}
          >
            <img
              src={img02}
              style={{ position: "absolute", left: "0px", bottom: "2px" }}
            />
            <input
              type="text"
              placeholder="请输入手机号"
              style={{
                width: "100%",
                border: "0px",
                marginLeft: "10%",
              }}
            />
          </div>
          <WhiteSpace />
          <div
            style={{
              position: "relative",
              width: "100%",
              borderBottom: "1px solid #000000",
              marginTop: "40px",
            }}
          >
            <img
              src={img03}
              style={{ position: "absolute", left: "0px", bottom: "2px" }}
            />
            <input
              type="text"
              placeholder="请输入密码"
              style={{
                width: "100%",
                border: "0px",
                marginLeft: "10%",
              }}
            />
          </div>
          <WhiteSpace size={"lg"} />
          <a className="mima">忘记密码？</a>
          
          <Button onClick={this.handleToClick}
            style={{
              background: "#50CC94",
              color: "#fff",
              borderRadius: "50px",
              width: "200px",
              margin: "0px auto",
            }}
          >
            登陆
          </Button>
         
          <WhiteSpace size={"xl"} />
          <p className="reg" onClick={this.handleClick}>
            立即注册
          </p>
          <Flex
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <Flex.Item style={{ flex: 0.2 }}>
              <div
                style={{
                  height: "1px",
                  width: "70px",
                  backgroundColor: "#CCCCCC",
                }}
              ></div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.6, color: "#CCCCCC" }}>
              或通过以下方式登录
            </Flex.Item>
            <Flex.Item style={{ flex: 0.2 }}>
              <div
                style={{
                  height: "1px",
                  width: "70px",
                  backgroundColor: "#CCCCCC",
                }}
              ></div>
            </Flex.Item>
          </Flex>
          <Flex
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "20px",
              marginLeft: "10%",
            }}
          >
            <Flex.Item style={{ flex: 0.33 }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#46BB36",
                  borderRadius: "15px",
                  lineHeight: "30px",
                }}
              >
                <img src={img} style={{ width: "15px", height: "15px" }} />
              </div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.33 }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#21ADF5",
                  borderRadius: "15px",
                  lineHeight: "30px",
                }}
              >
                <img src={img04} />
              </div>
            </Flex.Item>
            <Flex.Item style={{ flex: 0.33 }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#F56623",
                  borderRadius: "15px",
                  lineHeight: "30px",
                }}
              >
                <img src={img05} />
              </div>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    );
  }
}
