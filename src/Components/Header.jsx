import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [user, setUser] = useState(true)
  const [show, setShow] = useState(true)

  return (
    <div className=" md:h-20 h-18 bg-black">
      <div className="z-20 fixed w-full top-0 flex justify-between items-center flex-col md:flex-row gap-5 backdrop-blur-xl bg-[#0000002c] text-white md:px-10 px-5 py-3 ">

        <div className="flex justify-between w-full md:w-fit items-center">
          <Link to={"/"} className=" font-semibold font-family-cinzel">
            <h1 className="md:text-3xl text-2xl">THE CRAVE</h1>
            <h1 className="text-lg md:text-xl tracking-[9px] md:tracking-[13px]">KITCHEN</h1>
          </Link>

          <button onClick={() => setShow(!show)} className="md:hidden">
            <AiOutlineMenu className="text-4xl " />
          </button>
        </div>


        <div className={`${show && "hidden transition-all"}  w-3/5  transition-all md:flex justify-center items-center gap-5 md:text-lg font-semibold font-family-cinzel`}>

          <div onClick={() => setShow(!show)} className="gap-6 flex md:flex-row flex-col justify-between w-full  items-center ">

            <div className=" gap-6 flex md:flex-row flex-col justify-center items-center ">
              <NavLink className={"navlink"} to={"/"}>HOME</NavLink>
              <NavLink className={"navlink"} to={"/menu"}>OUR MENU</NavLink>
              <NavLink className={"navlink"} to={"/shop"}>OUR SHOP</NavLink>
              <NavLink className={"navlink"} to={"/contact"}>CONTACT US</NavLink>
            </div>

            <div className="">
              {user ?
                <div className="gap-6 flex md:flex-row flex-col justify-center items-center">
                  <button onClick={() => setUser(!user)} className={"navlink cursor-pointer"} >SIGN OUT</button>
                  <NavLink className={"navlink"} to={"/profile"}>PROFILE</NavLink>
                </div>
                :
                <div className="gap-6 flex md:flex-row flex-col justify-center items-center">
                  <NavLink className={"navlink"} to={"/login"}>LOG IN</NavLink>
                  <NavLink className={"navlink"} to={"/signup"}>SIGN UP</NavLink>
                </div>
              }
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header