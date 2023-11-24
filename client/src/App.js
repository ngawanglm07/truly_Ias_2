
import './App.css';
import Form from './components/Form';

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
    <h1>app is working</h1>
    <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
