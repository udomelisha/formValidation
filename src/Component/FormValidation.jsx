import "./formValidation.css";
import { useState } from 'react';


const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mothersName: '',
    age: '',
    contact: '',
    gender: ''
}



const Gender = [
  {id: 1, name: 'male'},
  {id: 2, name: 'female'}
]

const FormValidation = () => {
    const[formData, setFormData] = useState(initialState)
      //de-structing the initialState
      
      const {username, email, password, confirmPassword, mothersName,age,contact,gender} = formData;
    
    const [errors, setErrors] = useState({})

    const validationForm = () => {
        let newErrors = {}

        //validating name
        if (!mothersName) {
          newErrors.mothersName = 'please provite correct name'
       }


         //Validate username
        if (!username) {
           newErrors.username = 'username is required'
        }

        if (!email) {
            newErrors.email = 'email is required'
        }
        else if (!/\S+@\S+/.test(email)) {
            newErrors.email = 'Email is invalid'
        }

        //Validating the password
        if (!password) {
          newErrors.password = 'Password is required'
        }
        else if (password.length < 6) {
          newErrors.password = 'password must be at least six character long'
        }
        //Validating confirm password
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required'
        }else if  (confirmPassword !== password){
          newErrors.confirmPassword = 'Password do not match' 
        }

        //validating the age
        if (!age) {
            newErrors.age = 'Age is required'
        }
        
        else if(age < 18 || age > 40) {
          newErrors.age = 'Age must be between 18 and 40'
        }


        //validating the phon number
        if (!contact) {
            newErrors.contact = 'Contact number is required'
        }
        else if (isNaN(contact)) {
            newErrors.contact = 'Contact number must be a number'
        }
        else if (contact.length < 10) {
            newErrors.contact = 'Contact number must be 10 digits and above'
        }

        //validate the gender\

          if (!gender) {
            newErrors.gender = 'Gender is required'
        }
        // else if (gender!== 1 && gender!== 2) {
        //     newErrors.gender = 'Gender must be either male or female'
        // }

       



        setErrors(newErrors);

        //return true if there are no errors
         return Object.keys(newErrors).length === 0
    }


    const handSubmit = (e) => {
       e.preventDefault()

       if (validationForm()) {
        //perfoorm the forn submission
        console.log('Form submitted', formData);
        setFormData(initialState)
       }

    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <>
    <form action="" className='form' onSubmit={handSubmit}>

        <h3>Sign-up</h3>

        <div className='form-group'>
            <label>Full Name</label>
            <input type="text"
            placeholder="name"
             name='username'
             value={username}
             onChange={handleChange}
            />
            {errors.username && <span className="error"> {errors.username}  </span>}
        </div>

        

        <div className='form-group'>
            <label>Email</label>
            <input type="email" name='email'
            placeholder=".....@gmail.com"
             value={email}
             onChange={handleChange}
            />
            {errors.email && <span className="error"> {errors.email}  </span>}
        </div>

        <div className='form-group'>
            <label >Password</label>
            <input type="password"
            placeholder="must include characters and number" 
            name='password'
            value={password}
            onChange={handleChange}
          />
          {errors.password && <span className="error"> {errors.password}  </span>}
        </div>

        <div className='form-group'>
            <label>Comfirm Password</label>
            <input type="password" name='confirmPassword'
            placeholder="comfirm password"
            value={confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error"> {errors.confirmPassword}  </span>}
        </div>

        <div className='form-group'>
            <label>Mothers Name</label>
            <input type="text"
             name='mothersName'
             value={mothersName}
             onChange={handleChange}
            />
            {errors.mothersName && <span className="error"> {errors.mothersName}  </span>}
        </div>

        <div className='form-group'>
            <label>Age</label>
            <input type="number"
             name='age'
             placeholder="must not less than 18 or above 40 "
             value={age}
             onChange={handleChange}
            />
            {errors.age && <span className="error"> {errors.age}  </span>}
        </div>

        <div className='form-group'>
            <label>Contact (+234)</label>
            <input type="tel"
            placeholder="include your country code"
             name='contact'
             value={contact}
             onChange={handleChange}
            />
            {errors.contact && <span className="error"> {errors.contact}  </span>}
        </div>


        <div className='form-group'>
            <select value={gender} name="gender" onChange={handleChange} >
              <option value='' disabled>-- choose product Gender --</option>
              {Gender.map((e)=>{ 
                return (
                <option key={e.id} value={e.name}> {e.name} </option>
                )
              })}
            </select>
            {errors.gender && <span className="error"> {errors.gender}  </span>}
        </div>



        <button type='submit'>Submit</button>
    </form>   
    </>
  )
}

export default FormValidation