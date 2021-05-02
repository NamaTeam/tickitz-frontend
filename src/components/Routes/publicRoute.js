import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({component: Component, restricted, ...rest})=>{
    const {isLogin} = useSelector((state)=>state.UserLogin)
    return(
        <Route {...rest} render = {(props)=> isLogin && restricted ? <Redirect to='/'/> 
        : <Component {...props} />} />
    )
}
export default PublicRoute