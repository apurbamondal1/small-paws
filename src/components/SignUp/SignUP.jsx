
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../Contrext/UserContext";

const SignUp = () => {
 
    const {register,handleSubmit} = useForm();
    const {createUser} = useContext(AuthContex);
    const handleLogin = data =>{
        console.log(data);
         createUser(data.email , data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>CREATE ACCOUNT </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">first Name</span>
  </label>
  <input type="text"{...register("first name")} className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text">Last Name</span>
  </label>
  <input type="text"{...register("last name")} className="input input-bordered w-full max-w-xs" />
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

       <br></br> <input className="btn btn-primary w-full" type="Submit" Value="CREATE" />
        <label className="label">
    <span className="label-text">Log In</span>
  </label>  
  <label className="label">
    <span className="label-text">Return to Store</span>
  </label>
 
  
      </form>
      </div>
      </div>
    );
};

export default SignUp;