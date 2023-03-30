import {
	BrowserRouter,
	Route,
	Router,
	Routes,
	useHistory,
} from "react-router-dom";
import "./App.css";
 import Login from './Components/Login'
import Homepage from './Components/Homepage';
 import Register from './Components/Register'
import GuideSearch from './Components/GuideSearch';
import GuideRegister from './Components/GuideRegister'
import HotelSearch from './Components/HotelSearch'
import NavbarHome from './Components/NavBar_home';
import HotelRegister from './Components/HotelRegister';
import HotelBookingDetails from './Components/HotelBookingDetails'
import GuideBookingDetails from './Components/GuideBookingDetails';
import AdvertisingPayments from './Components/AdvertisingPayments'
import Payment from './Components/Payment'
import Destinations from './Components/Destinations';
import DestinationDetails from './Components/DestinationDetails';
import MapLocation from './Components/Map'
import AddtoMap from './Components/AddtoMap';
import VehicleHomePage from './Components/VehicleHomePage';
import AddVehicle from './Components/AddVehicle'
import VehicleDetails from './Components/VehicleDetails';
import AyurvedicRegister from "./Components/AyurvedicRegister";
import AyurvedicTreatmentHomePage from "./Components/AyurvedicTreatmentHomePage";
import Appointment from "./Components/Appointment";
import AppointmentDelete from "./Components/AppointmentDelete";
import AyurvedicFeedback from "./Components/AyurvedicFeedback";
import SlideShow from "./Components/SlideShow";
import AdventureAndExperienceCard from './Components/AdventureAndExperienceCard';
import OrderAndAdvertureExperience from './Components/OrderAndAdvertureExperience';
import Activity_c from './Components/Activity_c';
import BookingDetails from './Components/BookingDetails';
import ActivityRegister from './Components/ActivityRegister';
import ActivityDashboard from './Components/ActivityDashboard';
import BookingRequest from './Components/BookingRequest'
import BookedActivities from './Components/BookedActivities';
import RequestBooking from "./Components/RequestBooking";

function App() {
	return (
		<BrowserRouter>
		<Routes>
		<Route path='/' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
			<Route path='/homepage' element={<Homepage />}></Route>
		</Routes>
		</BrowserRouter>

	);
}

export default App;
