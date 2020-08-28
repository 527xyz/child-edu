import React from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import tpg1 from '../assets/img/tabbar-home.png'
import tpg11 from '../assets/img/tabbar-home-1.png'
import tpg2 from '../assets/img/tabbar-listen.png'
import tpg22 from '../assets/img/tabbar-listen-1.png'
import tpg3 from '../assets/img/tabbar-mine.png'
import tpg33 from '../assets/img/tabbar-mine-1.png'
import styles from'./tabbar.module.css'
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#50cc94"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<img alt="" src={tpg1} className={styles.tabbar_img}/>}
            selectedIcon={<img alt="" src={tpg11} className={styles.tabbar_img}/>}
            selected={this.props.location.pathname === '/home'}
            onPress={() => {
              this.props.history.push('/home')
            }}
            data-seed="logId"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<img alt="" src={tpg2} className={styles.tabbar_img}/>}
            selectedIcon={<img alt="" src={tpg22} className={styles.tabbar_img}/>}
            title="听一听"
            key="listen"
            selected={this.props.location.pathname === '/listen'}
            onPress={() => {
                this.props.history.push('/listen')
            }}
            data-seed="logId1"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<img alt="" src={tpg3} className={styles.tabbar_img}/>}
            selectedIcon={<img alt="" src={tpg33} className={styles.tabbar_img}/>}
            title="我的"
            key="my"
            selected={this.props.location.pathname === '/user'}
            onPress={() => {
                this.props.history.push('/user')
            }}
          >
            {this.props.children}
          </TabBar.Item>
          
        </TabBar>
      </div>
    );
  }
}
export default withRouter(Nav)