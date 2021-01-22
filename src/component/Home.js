import React ,{Component} from "react"
import "./homestyling.css"
import {Link} from "react-router-dom"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
export default class Home extends Component{

componentDidMount(){
	AOS.init({duration:1200});
}

render(){

return(

<div>
	
 <div className="parallax-main1">
   <div  className="parallax-submain1">
    
    </div>
<div data-aos='fade-up' className="parallax-submain2">
    <Link to="/menu" style={{borderColor:"white",color:"white"}} class="btn btn-outline-secondary">CLICK HERE TO GO TO MENU</Link>
    </div>





 </div>
 
 <div className="parallax-main2">
<p className="parallax-para"> 
<h3 data-aos='zoom-out-up' style={{textAlign:"center"}}>ABOUT US </h3>
<div data-aos='fade-right'>Order Food online from the best restaurants and shops.
<br /><br />
What's new?
✓ Selection of premium restaurants, all kind of cuisines.
✓ High quality delivery service.
<br /><br />
Frequently Asked Questions
<br />
Can I order food in Pakistan?
Yes, You can order food in every city of Pakistan.
<br />

Can you pay cash for foodpanda?
Yes, you can pay cash on delivery in Pakistan.
 
<br/><br />
|   Lahore   |   Islamabad  |   Karachi   | Multan   |<br /><br /> 
We are on <br />|   Facebook   |   Instagram  |   Twitter   |<br /><br />
|   ALL Rights Reseverd, Copyright @ Arslan ur Rahman  |<br /><br /></div> </p>
 </div>
</div>
	)

}
}

