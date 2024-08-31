import { useState } from 'react';
import { Button, Form, Stack, Alert } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './App.css';

function App() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    course: 'Biology'
  });

  // State for form validation
  const [validated, setValidated] = useState(false);

  // State for success message
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setAlertMessage(`Data Stored Successfully!\n
        Name: ${formData.name}\n
        Address: ${formData.address}\n
        Email: ${formData.email}\n
        Phone: ${formData.phone}\n
        Gender: ${formData.gender}\n
        Date of Birth: ${formData.dob}\n
        Course: ${formData.course}`);
      setShowAlert(true);
    }
    setValidated(true);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      course: 'Biology'
    });
    setValidated(false);
    setShowAlert(false);
  };

  return (
    <>
      <div className="container d-flex p-5 justify-content-center align-items-center">
        <div style={{ width: '100%', maxWidth: '500px' }} className='border p-4 rounded bg-primary shadow'>
          <h3 className='text-center text-light mb-4'>REGISTRATION FORM</h3>
          
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              {alertMessage.split('\n').map((str, idx) => <p key={idx}>{str}</p>)}
            </Alert>
          )}
          
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your phone number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Gender</Form.Label>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange} className='text-light'>
                <FormControlLabel value="female" control={<Radio sx={{ color: 'yellow', '&.Mui-checked': { color: 'green' } }} />} label="Female" />
                <FormControlLabel value="male" control={<Radio sx={{ color: 'yellow', '&.Mui-checked': { color: 'green' } }} />} label="Male" />
                <FormControlLabel value="other" control={<Radio sx={{ color: 'yellow', '&.Mui-checked': { color: 'green' } }} />} label="Other" />
              </RadioGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please select your date of birth.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className='text-light'>Course</Form.Label>
              <Form.Select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option>Biology</option>
                <option>Computer Science</option>
                <option>Commerce</option>
                <option>Humanities</option>
              </Form.Select>
            </Form.Group>

            <Stack direction="row" spacing={3} className='d-flex justify-content-between'>
              <Button type="submit" variant="contained" style={{ backgroundColor: 'green', letterSpacing: '1.9px' }} className='text-light mb-3'>
                REGISTER
              </Button>
              <Button type="button" onClick={handleReset} variant="contained" style={{ backgroundColor: 'red', letterSpacing: '1.9px' }} className='text-light'>
                RESET
              </Button>
            </Stack>
          </Form>
        </div>
      </div>
    </>
  );
}

export default App;
