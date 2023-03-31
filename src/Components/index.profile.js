import  React, {Component} from 'react';
import "../Styles/Homepage.css";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
import axios from 'axios';
import TableRow from "./profileTableRow";

    export default  class Index extends  Component{

    constructor(props) {
        super(props);
        this.state = {hotel : []};
        this.state.Email = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
      //  alert('Username is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/hotel/'+this.props.match.params.id)
            .then(response => {
                 alert('Pass una')
               // alert('Data Tika :'+response.data)
                this.setState({hotel : response.data});

            })
            .catch(function (error){
                console.log(error);
               alert('Pass unana')
            })
    }
    tabRow(){
            // eslint-disable-next-line react/jsx-no-undef
            return <TableRow obj={this.state.hotel}/>
    }


        render() {
	return (
		<div className='homePage'>
			<NavBarHome />
		
            <div className='profile-top'>
                   <div className='left-details'>
                        <h3>Your Profile Details</h3>
                        
                     
                   </div>
                   <div className='right-details'>
                    {this.tabRow()}
                   </div>
                  
                    
                </div>
			
			<Footer />
		</div>
	);
    }
}


