import React, { Component } from 'react'
import {Icon} from 'antd-mobile'
import styles from './listenList.module.scss'

export default class ListenList extends Component {
  constructor(props){
    super(props)
    this.state = {
      introIsShow:false,
      myListen:{
        id:1,
        imgPic:"../../assets/img/listen-list-icon.png",
        tabs:["晚安宝贝","睡前故事"],
        author:"小点讲故事",
        playNum:22000,
        intro:"亲子阅读是什么？是家长为孩子建构精神世界和学习能力的过程，是家长为自己孩子读书的过程，是家长和自己孩子一起读书的过程，是家长陪伴自己孩子读书的过程。让孩子快乐地阅读许许多多应该在童年阅读的美好的书，就是把那一颗颗美丽的爱的种子、智慧的种子、知识的种子播种在童年里。有播种不一定有收获，但没有播种一定不会有收获",
        listenBook:[
          {
            id:1,
            title:"如何做好父亲的第一步!",
            bookListenNum:1708,
            time:128
          },
          {
            id:2,
            title:"如何做好父亲的第二步!",
            bookListenNum:2020,
            time:192
          },
          {
            id:3,
            title:"如何做好父亲的第三步!",
            bookListenNum:3108,
            time:188
          },
          {
            id:4,
            title:"如何做好父亲的第一步!",
            bookListenNum:1708,
            time:128
          },
          {
            id:5,
            title:"如何做好父亲的第二步!",
            bookListenNum:2020,
            time:192
          },
          {
            id:6,
            title:"如何做好父亲的第三步!",
            bookListenNum:3108,
            time:188
          },
          {
            id:7,
            title:"如何做好父亲的第一步!",
            bookListenNum:1708,
            time:128
          },
          {
            id:8,
            title:"如何做好父亲的第二步!",
            bookListenNum:2020,
            time:192
          },
          {
            id:9,
            title:"如何做好父亲的第三步!",
            bookListenNum:3108,
            time:188
          },
          {
            id:10,
            title:"如何做好父亲的第一步!",
            bookListenNum:1708,
            time:128
          },
          {
            id:11,
            title:"如何做好父亲的第二步!",
            bookListenNum:2020,
            time:192
          },
          {
            id:12,
            title:"如何做好父亲的第三步!",
            bookListenNum:3108,
            time:188
          }
        ]
      }
    }
  }
  getMyTime = (t)=>{
    let t1 = parseInt(t / 60)
    let t2 = parseFloat(t % 60)
    if(t1.toString().length < 2){
      t1 = "0" + t1
    }
    if(t2.toString().length < 2){
      t2 = "0" + t2
    }
    console.log(t1,t2)
    return t1 + ":" + t2
  }
  static getDerivedStateFromProps(nextProps,nextState){
    console.log(nextProps.match.params.id)
    console.log(nextProps)
    return nextState
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.listenlist}>
          <div className={styles.appup}>
            <div className={styles.header}>
              <button onClick={()=>{this.props.history.goBack()}}><Icon type="left" color="#fff" size="md" /></button>
              <img src={require("../../assets/img/listen-list-icon.png")} alt=""/>
            </div>
            <div className={styles.listen_intro}>
              <div className={styles.imgbox}>
                <div className={styles.listen_img}>
                  <img src={require("../../assets/img/listen-img.png")} alt=""/>
                </div>
                <div className={styles.playnum}>
                  <img src={require("../../assets/img/listen-icon.png")} alt=""/>
                  <span>{((this.state.myListen.playNum)/10000).toFixed(1)}万</span>
                </div>
              </div>
              <div className={styles.contbox}>
                <h3>
                  {
                    this.state.myListen.tabs.map((val,idx)=>{
                      if(idx==this.state.myListen.tabs.length - 1){
                        return val
                      }
                      return (
                        val + " | "
                      )
                    })
                  }
                  </h3>
                <h5><img src={require("../../assets/img/listen-musicicon.png")} alt=""/>{this.state.myListen.author}</h5>
                <p><Icon type="ellipsis" color="#fff" size="xs" /> {this.state.myListen.listenBook.length}集</p>
              </div>
            </div>
            <div className={styles.brief}>
              {
                this.state.introIsShow?
                <div className={styles.cont_show}>
                  <p>
                    简介：{this.state.myListen.intro}
                  </p>
                  <button onClick={()=>this.setState({introIsShow:!this.state.introIsShow})}><Icon type="up" color="#52D5AA" size="lg" /></button>
                </div>
                :
                <div className={styles.cont_hidden}>
                  <p>
                    简介：{this.state.myListen.intro}
                  </p>
                  <button onClick={()=>this.setState({introIsShow:!this.state.introIsShow})}><Icon type="down" color="#fff" size="md" /></button>
                </div>
              }
            </div>
          </div>
          {
            !this.state.introIsShow?
              <div className={styles.listenbook_list}>
                <div className={styles.allbtn}>
                  推送全部
                </div>
                {
                  this.state.myListen.listenBook.map((val,idx)=>{
                    return (
                      <div className={styles.listenbook_item} key={val.id} >
                        <i className={styles.item_id}>{idx}</i>
                        <div className={styles.item_cont}>
                          <h3>{val.title}</h3>
                          <p><em>{val.bookListenNum}</em><strong>{this.getMyTime(val.time)}</strong></p>
                        </div>
                        <img src={require("../../assets/img/listen-item-bg.png")} alt=""/>
                      </div>
                    )
                  })
                }
              </div>
              :
              ""
          }
        </div>
      </React.Fragment>
    )
  }
}
