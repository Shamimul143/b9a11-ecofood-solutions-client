

import { FcGoogle } from "react-icons/fc";
import AllAuth from "./AllAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import axios from "axios";

const Login = () => {
    const location = useLocation()  

    const { googleLogin, loginUser } = AllAuth()
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(() => {
                toast.success('Login successfully');
                e.target.reset();                
                const user ={email}

                axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                    if(res.data.success){
                        navigate(location?.state? location?.state : "/")
                    }
                })

            })
            .catch(() => { toast.warning("Invalid User or Password") })

    }
  
    // const googleLogin = async () => {
    //     try {
    //       const result = await googleLogin();
    //       const { data } = await axios.post( 'http://localhost:5000/jwt',
    //         {
    //           email: result?.user?.email,
    //         },
    //         { withCredentials: true }
    //       );
    //       console.log(data);
    //       toast.success("Login Successfully");
    //       setLoading(false);
    //       setTimeout(() => {
    //         navigate(location?.state ? location.state : "/");
    //       }, 1000);
    //     } catch (err) {
    //       toast.error("Access Denied");
    //     }
    //   };
    // localhost






    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet><title>Login</title></Helmet>
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left my-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div>
                        <div onClick={googleLogin} className="flex items-center gap-5  py-1 px-2 mx-4  border-2 rounded-lg border-[#478bca]"><FcGoogle /><button>Login With Google</button></div>
                        
                    </div>
                    <p className="my-5 mx-3">Don`t have an account? <Link to="/register" className="link link-accent">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;