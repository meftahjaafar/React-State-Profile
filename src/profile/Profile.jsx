import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
                    
                    <img src={this.props.children}  alt='imageprofile' height='200px' width='200px' />
             
                    <div className="profile" >
                       
                        <h1>{this.props.Person.fullname}</h1> 
                        <h4>{this.props.Person.profession}</h4>
                        <h5>{this.props.Person.address}</h5>
                    </div>

        </div>
        
         );
         
    }
}
export default Profile;