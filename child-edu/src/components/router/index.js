import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import TabBar from '../../layout/Tabbar'
import Home from '../../pages/home'
import Listen from '../../pages/listen'
import Mine from '../../pages/mine'
import Login from '../../pages/login'
import Reg from '../../pages/reg'
import NoPage from '../../pages/no-page'
import Cover from '../../pages/cover'
import List from '../../pages/list'

import {connect} from 'react-redux'
import {CoverHide} from '../../plugins/redux/store/actionCreators'

function Router(props) {
    let {coverHide}=props
    setTimeout(function () {
        props.dispatch(CoverHide())
    }, 3000)
    return (
        <>
            <Switch>
                <Route exact path="/home" render={(props) => (
                    coverHide?<Cover {...props}/>:<TabBar {...props}><Home {...props}/></TabBar>
                )} />
                <Route exact path="/listen" render={(props) => <TabBar><Listen {...props} /></TabBar>} />
                <Route exact path="/user" render={(props) => <TabBar><Mine {...props} /></TabBar>} />
                <Route exact path="/login" render={(props) => <Login {...props} />} />
                <Route exact path="/reg" render={(props) => <Reg {...props} />} />
                <Route exact path="/list" render={(props) => <List {...props} />} />
                <Redirect exact from="/" to="home" />
                <Route component={NoPage} />
            </Switch>
        </>
    )
}
export default connect(state=>({coverHide:state.coverHide}))(Router)
