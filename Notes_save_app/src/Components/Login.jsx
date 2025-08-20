import { useState } from "react"
import './Login.css'
function Login() {
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
       <h1>LOGIN</h1>
       <form onSubmit={handlesubmit}>
         <input type="email" name="email" id="email_id" placeholder="Enter the email"  value={email} onChange={(e)=>{setemail(e.target.value)}} required />
         <input type="password" name="password" id="password_id" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
         <button type="submit" disabled={isDisabled}>Submit</button>
       </form>
     
    </>
  )
}

export default Login