import React from "react";
import { Icon, NavBar, Button, WhiteSpace } from "antd-mobile";
import img01 from "./image/u179.png"
import img02 from "./image/u58.png"
import img03 from "./image/u65.png"
import img04 from "./image/u539.png"

export default function Reg() {
    
    return (
    <div>
      <NavBar
        style={{ background: "none" }}
        mode="light"
        icon={<Icon type="left" />}
        //   onLeftClick={() => history.go(-1)}
      />
      <img
        src={img04}
        style={{ display: "block", margin: "10% auto" }}
      />
      <div style={{ marginTop: "30%", padding: "0 10%" }}>
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
            src={img01}
            style={{ position: "absolute", left: "0px", bottom: "2px" }}
          />
          <input
            type="text"
            placeholder="请输入验证码"
            style={{
              width: "100%",
              border: "0px",
              marginLeft: "10%",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "0px",
              bottom: "2px",
              fontSize: "16px",
              color: "#50CC94",
            }}
          >
            获取验证码
          </span>
        </div>
        <WhiteSpace size={"xl"} />
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
        <WhiteSpace size={"xl"} />

        <Button onClick={()=>{this.props.history.push('/login')}}
          style={{
            background: "#50CC94",
            color: "#fff",
            borderRadius: "50px",
            width: "200px",
            margin: "30px auto",
          }}
        >
          立即注册
        </Button>
      </div>
    </div>
  );
}
