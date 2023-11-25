
import './App.css';
import Form from './components/Form';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
      if (response.ok) {
        console.log('Form data successfully sent to the backend');
  
      } else {
        console.error('Failed to send form data to the backend');
      }
    } catch (error) {
      console.error('Error sending form data to the backend:', error);
    }
  };

  return (

    <div className="App">
    <Router>
    <div>
      <MyNavbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    
  </Router>
  <h1>app is working</h1>
    <Form onSubmit={handleFormSubmit} />
  </div>

  );
}

export default App;
