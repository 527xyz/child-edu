import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import TabBar from '../../layout/index'
import Home from '../../pages/home'
import Listen from '../../pages/listen'
import Mine from '../../pages/mine'
import Login from '../../pages/login'
import Reg from '../../pages/reg'
import NoPage from '../../pages/no-page'
export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/home" render={()=><TabBar><Home/></TabBar>}/>
                <Route exact path="/listen" render={()=><TabBar><Listen/></TabBar>}/>
                <Route exact path="/user" render={()=><TabBar><Mine/></TabBar>}/>
                <Route exact path="/login" render={()=><Login/>}/>
                <Route exact path="/reg" render={()=><Reg/>}/>
                <Redirect exact from="/" to="home"/>
                <Route component={NoPage}/>
            </Switch>
        </>
    )
}
