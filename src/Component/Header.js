import React from 'react'
import Jumbotron from './Jumbotron'
import Navigasi from './Navigasi'
class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <Navigasi/>
                <Jumbotron/>
            </div>
        )
    }
}
export default Header