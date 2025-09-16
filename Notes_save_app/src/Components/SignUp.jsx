import { useState } from "react"
import './SignUp.css'
function SignUp() {
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [isDisabled, setIsDisabled] = useState(false);
  function handlesubmit(e) {
  e.preventDefault();
  setIsDisabled(true);

  console.log(email);
  console.log(password);

  setTimeout(() => {
    setIsDisabled(false);
  }, 10000); 
}

  return (
    <>
       <h1>SIGNUP</h1>
       <form onSubmit={handlesubmit}>
         <input type="text" name="user_name" id="user_name" placeholder="Enter the username"  value={username} onChange={(e)=>{setusername(e.target.value)}} required />
         <input type="email" name="email" id="email_id" placeholder="Enter the email"  value={email} onChange={(e)=>{setemail(e.target.value)}} required />
         <input type="password" name="password" id="password_id" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
         <button type="submit" disabled={isDisabled}>Submit</button>
       </form>
     
    </>
  )
}

export default SignUp