import React, { useState } from 'react';

function MyForm() {
  // Initialize state with default values
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input
          type="text"
          name="input1"
          value={inputs.input1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          name="input2"
          value={inputs.input2}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Input 3:
        <input
          type="text"
          name="input3"
          value={inputs.input3}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Input 4:
        <input
          type="text"
          name="input4"
          value={inputs.input4}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Input 5:
        <input
          type="text"
          name="input5"
          value={inputs.input5}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
