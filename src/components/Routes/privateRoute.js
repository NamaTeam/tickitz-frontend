import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component, ...props})=>{
    const {isLogin} = useSelector((state)=>state.UserLogin)
    return(
        <Route {...props} render = {(props)=> isLogin ? <Component {...props}/>
        : <Redirect to='/login'/> }/>
    )
}

export default PrivateRoute