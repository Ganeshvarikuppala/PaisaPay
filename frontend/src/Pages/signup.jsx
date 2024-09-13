import React, { useState } from "react";
import { Heading } from "../Comp/Heading";
import { SubHeading } from "../Comp/Info";
import { Inputbox } from "../Comp/InputBox";
import { Button } from "../Comp/Button";
import { BottomWarning } from "../Comp/Bottomwarning";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export function Home(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gray-500 w-80 text-center p-2 h-max px-4">
                <Heading title={"Sign Up"} />
                <SubHeading Descprition={"Enter Your details to create Account"}/>
                <Inputbox onchange={(e) => setFirstName(e.target.value)} label={"FirstName"} placeholder={firstName} />
                <Inputbox onchange={(e) => setLastname(e.target.value)} label={"Lastname"} placeholder={lastName} />
                <Inputbox onchange={(e) => setPassword(e.target.value)} label={"Password"} placeholder={password} />
                <Inputbox onchange={(e) => setUsername(e.target.value)} label={"Email"} placeholder={username} />
                <div className= "pt-10">
                     <Button onclick ={async () =>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{

                            username,
                            password,
                            firstName,
                            lastName,
                            
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                      
                     }} buttocontent={"Signup"} />
                </div>
               
                <BottomWarning label={"Already have a Account Please "} buttonText={"Sign In"} to={"/signin"}/>
            </div>
            
        </div>  
   
      
    </div>
  );
}




 {/* <div>
            <SubHeading Descprition={"Enter Your details to create Account"}/>
        </div>
        <div>
            <Inputbox label={"FirstName"} placeholder={"Firstname"} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
            <Inputbox label={"Lastname"} placeholder={"Lastname"} onChange={(e) => setLastname(e.target.value)}/>
           
        </div>
        <div>
        <Inputbox label={"Password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)}/>
        </div>


        <div>
        <Inputbox label={"Email"} placeholder={"Email"} onChange={(e) => setUsername(e.target.value)}/>
        </div> */}




// import React, { useState } from "react";

// export function Home(props) {
//   const [FirstName, setFirstName] = useState("");
//   const [LastName, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="container">
//       <div className="title flex justify-center font-bold text-2xl">
//         {props.title}
//       </div>
//       <div className="info flex justify-center">
//         Enter your information to create account
//       </div>
//       <div className="input-group flex justify-center">
//         <p className="font-bold text-xl  flex-col">FirstName</p>
//         <input
//           type="text"
//           className="border-solid border-2 border-indigo-600 m-2"
//           placeholder="John"
//           value={FirstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>
//       <div className="input-group flex justify-center">
//         <p className="font-bold text-xl ml-2">LastName</p>
//         <input
//           type="text"
//           className="border-solid border-2 border-indigo-600 m-2"
//           placeholder="lastname"
//           value={LastName}
//           onChange={(e) => setLastname(e.target.value)}
//         />
//       </div>
//       <div className="input-group flex justify-center">
//         <p className="font-bold text-xl ml-2 mr-50">Username</p>
//         <input
//           type="email"
//           className="border-solid border-2 border-indigo-600 m-2"
//           placeholder="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="input-group flex justify-center">
//         <p className="font-bold text-xl ml-2 mr-50">Password</p>
//         <input
//           type="password"
//           className="border-solid border-2 border-indigo-600 m-2"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }
