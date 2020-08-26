import React, { Component } from 'react'
import cover1 from '../../assets/img/cover1.png'
import cover2 from '../../assets/img/cover2.png'
import cover3 from '../../assets/img/cover3.png'
import './cover.scss'

import {connect} from 'react-redux'
import {CoverHide} from '../../plugins/redux/store/actionCreators'

class Cover extends Component {
    constructor(props) {
        super(props)
        this.timer = '';
    }
    state = {
        count: 3
    }
    toHome=()=>{
        this.props.dispatch(CoverHide(false))
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            return this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="box">
                <div className="img1">
                    <img src={cover1} alt=""/>
                </div>
                <div className="img2">
                    <img src={cover2} alt=""/>
                </div>
                <div className="context">
                    <p className="big_tit">儿童教育</p>
                    <p className="sm_tit">一起畅游知识的海洋</p>
                </div>
                <div className="img3">
                    <img src={cover3} alt=""/>
                </div>
                <div className="countDown" onClick={this.toHome}>跳过{this.state.count}</div>
            </div>
        )
    }
}
export default connect(state=>(state))(Cover)
