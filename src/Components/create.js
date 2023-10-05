import React from "react";
import { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post('https://6420631682bea25f6d002332.mockapi.io/user', {
      firstName,
      lastName,
      checkbox
    })
    .then(() => {
      refreshPage();
    })
    .catch(error => {
      console.log(error);
    });
  };

  function refreshPage() {
    if (window.confirm("Data's that you've entered were saved Successfully!")) {
      window.location.reload();
    }
  }

  return (
    <div className="createParent">
      <h1>Create User</h1>
      <div className="card">
        <div className="card-body">
          <Form className="create-form">
            <Form.Field>
              <label>First Name :</label>
              <input style={{ marginBottom: '10px', marginLeft: "3px" }} className="input-field" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Last Name :</label>
              <input style={{ marginBottom: '10px', marginLeft: "3px" }} className="input-field" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <div className="checkbox-container">
                <Checkbox label="I agree to the Terms and Conditions" onChange={(e) => setCheckbox(!checkbox)} />
              </div>
            </Form.Field>
            <button type="button" onClick={postData} className="submitbutton">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
