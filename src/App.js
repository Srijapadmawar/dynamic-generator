
import { useState } from 'react';
import './App.css';

function App() {
  const [values, setvalues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    resume:'',
    url:'',
    about:''
  })

  const handleChanges = (e) => {
    setvalues({...values, [e.target.name]:[e.target.value]})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  

  return (
    <div className="container">
        <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input type ="text" placeholder="Enter first name" name="firstname"
                onChange={(e) => handleChanges(e)} values={values.firstname}/>
                <label htmlFor="lastname">Lastname</label>
                <input type ="text" placeholder="Enter last name" name="lastname"
                onChange={(e) => handleChanges(e)} values={values.lastname}/>

                <label htmlFor="email">Email</label>
                <input type ="email" placeholder="Enter email" name="email"
                onChange={(e) => handleChanges(e)} values={values.email}/>

                <label htmlFor="contact">Contact</label>
                <input type ="text" placeholder="Enter phone #91" name="contact"
                onChange={(e) => handleChanges(e)}/>

                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" 
                onChange={(e) => handleChanges(e)}/>Male
                <input type="radio" name="gender" 
                onChange={(e) => handleChanges(e)}/>female
                <input type="radio" name="gender" 
                onChange={(e) => handleChanges(e)}/>other

                
               

                <label htmlFor="resume">Resume</label>
                <input type="file" placeholder="select resume" name="resume"
                onChange={(e) => handleChanges(e)}/>

                <label htmlFor="url">URl</label>
                <input type="text" name="url" placeholder="enter image url"
                onChange={(e) => handleChanges(e)}/>


                <label htmlFor="about">About</label>
                <textarea name="about" id="about" cols="30" rows="10"
                onChange={(e) => handleChanges(e)} placeholder="enter description"></textarea>
                
                <button type="submit">Submit</button>


            </form> 
    </div>
  );
}

export default App;
