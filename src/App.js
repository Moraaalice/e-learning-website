import Navbar from './components/Navbar';
import Education from './components/Body';
import Images from './components/Logo';
import OnlinePlatform from './components/Teaching';
import Instructors from './components/Talents';
import CustomerFeedback from './components/Feedback';
import WebFooter from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Education/>
      <Images/>
      <OnlinePlatform/>
      <Instructors/>
      <CustomerFeedback/>
      <WebFooter/>
    </div>
  );
}

export default App;
