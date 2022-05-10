
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'
import Signin from './Components/Signin/Signin';
import DonorRegistration from './Components/DonorRegistration/DonorRegistration';
import RecipientRegistration from './Components/Recipient/RecipientRegistration';
import DisplayProfile from './Components/DisplayProfile/DisplayProfile';
function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
      <Route path="/" exact render={(props)=>(<Body {...props} />)}></Route>
      {/* <Route path="/signUp"  render={(props)=>(<SignUp {...props} />)}></Route> */}
      <Route path="/login" render={(props)=>(<Signin {...props}/>)}/>
      <Route path="/donorRegistration" render={(props)=>(<DonorRegistration {...props}></DonorRegistration>)} ></Route>
      <Route path="/recipientRegistration" render={(props)=>(<RecipientRegistration {...props}></RecipientRegistration>)} ></Route>
      <Route path="/displayProfile" render={(props)=>(<DisplayProfile {...props} />)}/>
      </Switch>
    


    </Router>
    
    </>
    
  );
}

export default App;
