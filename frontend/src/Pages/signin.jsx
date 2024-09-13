import React, { useState } from "react";
import { Heading } from "../Comp/Heading";
import { SubHeading } from "../Comp/Info";
import { Inputbox } from "../Comp/InputBox";
import { Button } from "../Comp/Button";
import axios from "axios";

export function Signin(props) {


  return (
    <div className="bg-slate-300  h-screen flex justify-center">
        <div className=" flex flex-col justify-center">
            <div className=" card w-96 shadow-md rounded-lg rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading title={"Sign In"}/>
                <SubHeading Descprition={" Enter details to Logn In"}/>
                <Inputbox label={"Username"} placeholder={"Username"}/>
                <Inputbox label={"Password"} placeholder={"Password"}/>
                <Button onclick={async ()=>{
                      await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password,
                    })
                }
                   
                }buttocontent={"Sign In"}/>
            </div>
        </div>
        
    </div>
 )

}