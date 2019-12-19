import React, { Component } from 'react'
import { Link ,withRouter} from 'react-router-dom';
import arrow from '../assets/images/dot-arrow.svg'


class Home extends Component {
    state={
        animate:false
    }


    clickHandler=()=>{
        this.setState({
            animate:true
        },()=>this.navigatePage())
    }

    navigatePage=()=>{
        setTimeout(() => {
            console.log('This will run after 1 second!',this.props.history.push('/service'))
          }, 1000);
    }
    render() {
        let {animate}=this.state;
        return (
            <div className={`homepage-wrapper ${animate ? 'fadeout' : ''}`}>
                <div className='homepage'>
                    <h2>Hello, my name is Shivam Dwivedi and I am</h2>
                    <h1>TECHNOLOGIST | DEVELOPER | MUSICIAN</h1>
                    <h2 onClick={()=>this.clickHandler()}>creating modern music and codes.</h2>
                    <h3 className='exploremore'>explore my works<Link to='/service'><img src={arrow} /></Link></h3>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)