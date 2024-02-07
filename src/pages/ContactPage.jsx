// import react and file resouces along with helper function
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function ContactPage() {
  // via useState-react to keep track of fields in the contact form, and hangle input changes to display error message if needed
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    // username field change handling
    if (inputType === 'nameInput' && inputValue) {
      setName(inputValue);
      setErrorMessage('');
    } else if (inputType === 'nameInput' && !inputValue) {
      setErrorMessage(`Name Required!`)
    }

    // email field change handling
    if (inputType === 'emailInput' && inputValue && validateEmail(inputValue)) {
      setEmail(inputValue);
      setErrorMessage('');
    } else if (inputType === 'emailInput' && inputValue && !validateEmail(inputValue)) {
      setErrorMessage(`Email is invalid!`)
    } else if (inputType === 'emailInput' && !inputValue) {
      setErrorMessage(`Email Required!`)
    }

    // message field change handling
    if (inputType === 'messageInput' && inputValue) {
      setMessage(inputValue);
      setErrorMessage('');
    } else if (inputType === 'messageInput' && !inputValue) {
      setErrorMessage(`Message Required!`)
    }
  };

  return (
    // bootstrap-form displayed as the contact component
    <div className="container pt-4 myOutlet">
      <h2>Contact</h2>
      <Form>
        <Form.Group className="mb-3" controlId="nameInput">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter name" onChange={handleInputChange} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="emailInput">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="messageInput">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="cc. me on delivered message" />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}