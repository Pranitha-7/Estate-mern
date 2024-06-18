import { Link } from "react-router-dom"

export default function signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className ='text-3xl text-center font-semibold my-9'>Sign Up</h1>
      <form className='flex flex-col gap-4
      '>
        <input type="text" placeholder='usernname!'
         className='border p-3 rounded-xl' id='username' />
          <input type="text" placeholder='email!!' 
          className='border p-3 rounded-xl' id='email'/>
           <input type="text" placeholder='Password!'
            className='border p-3 rounded-xl' id='password'/>
            <button className='bg-green-500 text-black p-3 rounded-2xl uppercase hover:opacity-95
            disabled:opacity-80'>SignUp</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
        <span className="text-blue-900">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
