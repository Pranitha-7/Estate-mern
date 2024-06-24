import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"

export default function signup() {
  const [formData,setFormData]=useState({}) 
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    );

  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signup',
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
     console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
        

    }
    catch(error){
      setLoading(false);
      setError(error.message);

    }
   
  };
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className ='text-3xl text-center font-semibold my-9'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4
      '>
        <input type="text" placeholder='usernname!'
         className='border p-3 rounded-xl' id='username' 
         onChange={handleChange}/>
          <input type="email" placeholder='email!!' 
          className='border p-3 rounded-xl' id='email'
          onChange={handleChange}/>
           <input type="password" placeholder='Password!'
            className='border p-3 rounded-xl' id='password'
            onChange={handleChange}/>
            <button disabled={loading} className='bg-green-500 text-black p-3 rounded-2xl uppercase hover:opacity-95
            disabled:opacity-80'>
              {loading?'Loading.....':'Sign Up'}
            </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
        <span className="text-blue-900">Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
