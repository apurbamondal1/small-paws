import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Contrext/UserContext";

const Login = () => {
  const {LogIn}=useContext(AuthContex)
    const {register,handleSubmit} = useForm();
    const handleLogin = data =>{
        console.log(data);
        LogIn(data.email , data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>LOGIN </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text"{...register("email")} className="input input-bordered w-full max-w-xs" />
  </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text"{...register("password")} className="input input-bordered w-full max-w-xs" />
  </div>

       <br></br> <input className="btn btn-primary w-full" type="Submit" Value="Sign In" />
        <label className="label">
    <Link to='/SignUp'><span className="label-text">Create Account</span></Link>
  </label>  
  <label className="label">
    <span className="label-text">Forgett Password</span>
  </label>
  <label className="label">
    <span className="label-text btn btn-secondary">Google</span>
  </label>
  
      </form>
      </div>
      </div>
    );
};

export default Login;