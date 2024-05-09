import { Link, useNavigate } from "react-router-dom";
import AllAuth from "./AllAuth";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    const { createRegister } = AllAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [registerError, setRegisterError] = useState("")
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;

        setRegisterError("");
        if (password.length < 6) {
            setRegisterError("Password minimum 6 character ");
            return;
        } if (!/[A-Z]/, !/[a-z]/.test(password)) {
            setRegisterError("Your password should have at least one upper case & lower case characters");
            return;
        }


        createRegister(email, password, name, photoUrl)
            .then((result) => {
                console.log(result.user);
                toast.success("Register Successfully");
                navigate("/")
                e.target.reset();
            })
            .catch((error) => {
                setRegisterError(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left my-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Your Name" className=" input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className=" input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="PhotoURL" className=" input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        {
                            registerError && <p className="text-red-500">{registerError}</p>
                        }
                        <div className="form-control mt-6">
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Register" />
                        </div>
                        <p>Already have an account? <Link to="/login" className="link link-accent">Login</Link></p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;