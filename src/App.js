import {
	Switch,
	Route,
	BrowserRouter as Router,
	BrowserRouter,
	Routes,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import GuideSearch from "./Components/GuideSearch";
import GuideRegister from "./Components/GuideRegister";
import HotelSearch from "./Components/HotelSearch";
import NavbarHome from "./Components/NavBar_home";
import HotelRegister from "./Components/HotelRegister";
import HotelBookingDetails from "./Components/HotelBookingDetails";
import GuideBookingDetails from "./Components/GuideBookingDetails";
import AdvertisingPayments from "./Components/AdvertisingPayments";
import Payment from "./Components/Payment";
import Destinations from "./Components/Destinations";
import DestinationDetails from "./Components/DestinationDetails";
import MapLocation from "./Components/Map";
import AddtoMap from "./Components/AddtoMap";
import VehicleHomePage from "./Components/VehicleHomePage";
import AddVehicle from "./Components/AddVehicle";
import VehicleDetails from "./Components/VehicleDetails";
import AyurvedicRegister from "./Components/AyurvedicRegister";
import AyurvedicTreatmentHomePage from "./Components/AyurvedicTreatmentHomePage";
import Appointment from "./Components/Appointment";
import AppointmentDelete from "./Components/AppointmentDelete";
import AyurvedicFeedback from "./Components/AyurvedicFeedback";
// import SlideShow from "./Components/SlideShow";
import AdventureAndExperienceCard from "./Components/AdventureAndExperienceCard";
import OrderAndAdvertureExperience from "./Components/OrderAndAdvertureExperience";
import Activity_c from "./Components/Activity_c";
import BookingDetails from "./Components/BookingDetails";
import ActivityRegister from "./Components/ActivityRegister";
import ActivityDashboard from "./Components/ActivityDashboard";
import BookingRequest from "./Components/BookingRequest";
import BookedActivities from "./Components/BookedActivities";
import RequestBooking from "./Components/RequestBooking";
import HomepageAdmin from "./Components/HomepageAdmin";
import index from "./Components/index.profile";


class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route
							path='/GuideBookingDetails'
							component={GuideBookingDetails}
						/>
						<Route path='/Register' component={Register} />
						<Route path='/login' component={Login} />
						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/guideregister' component={GuideRegister} />
						<Route path='/HotelSearch' component={HotelSearch} />
						<Route path='/VehicleHomePage' component={VehicleHomePage} />
						<Route path='/Payment' component={Payment} />
						<Route path='/AddVehicle' component={AddVehicle} />
						<Route path='/VehicleDetails' component={VehicleDetails} />
						<Route path='/AyurvedicRegister' component={AyurvedicRegister} />
						<Route
							path='/AyurvedicTreatmentHomePage'
							component={AyurvedicTreatmentHomePage}
						/>
						<Route path='/Appointment' component={Appointment} />
						<Route path='/AppointmentDelete' component={AppointmentDelete} />
						<Route path='/AyurvedicFeedback' component={AyurvedicFeedback} />
						<Route
							path='/AdventureAndExperienceCard'
							component={AdventureAndExperienceCard}
						/>
						<Route
							path='/OrderAndAdvertureExperience'
							component={OrderAndAdvertureExperience}
						/>
						<Route path='/Activity_c' component={Activity_c} />
						<Route path='/BookingDetails' component={BookingDetails} />
						<Route path='/ActivityRegister' component={ActivityRegister} />
						<Route path='/ActivityDashboard' component={ActivityDashboard} />
						<Route path='/BookingRequest' component={BookingRequest} />
						<Route path='/RequestBooking' component={RequestBooking} />
						<Route path='/hotelregister' component={HotelRegister} />
						<Route path='/BookedActivities' component={BookedActivities} />
						<Route path='/HomepageAdmin' component={HomepageAdmin} />

						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/index/:id' component={index} />
						{/* <Route  path='/RequestBooking' component={RequestBooking}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
// 	);
//   };

// function App() {
//   return (
//      <div className="App">
//     {/* < Login /> */}
//     {/* < Homepage /> */}

//       {/* < Register />  */}

// 			{/* <GuideSearch />  */}

// 			{/* <GuideRegister /> */}

// 			{/* <HotelSearch /> */}

// 			{/* <NavbarHome /> */}

// 			{/* <HotelRegister /> */}

// 			{/* <HotelBookingDetails /> */}

// 			{/* <GuideBookingDetails /> */}

// 			{/* <AdvertisingPayments /> */}

// 			{/* <Payment /> */}

// 			{/* <Destinations /> */}

// 			{/* <DestinationDetails /> */}
// 			{/* <MapLocation /> */}

// 			{/* <AddtoMap /> */}

// 			{/* <VehicleHomePage /> */}

// 			{/* <AddVehicle /> */}

// 			{/* <VehicleDetails /> */}
// 			{/* <AyurvedicRegister /> */}

// 			{/* <AyurvedicTreatmentHomePage /> */}

// 			{/* <Appointment /> */}

// 			{/* <AppointmentDelete /> */}

// 			{/* <AyurvedicFeedback /> */}

// 			{/* <SlideShow /> */}

// 			{/* <AdventureAndExperienceCard /> */}

// 			{/* <OrderAndAdvertureExperience /> */}

// 			{/* <Activity_c /> */}

// 			{/* <BookingDetails /> */}

{
	/* <ActivityRegister /> */
}

// 			</div>
// 	);
// }
