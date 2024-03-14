import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { signout } from "src/redux/user/userActions";
const Header = () => {
 const {user} = useSelector((state) => state.userSignin);
const dispath = useDispatch()
useEffect(()=>{},[user])
  return (
    <header className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40`}>
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/">
                <a className="py-2 block">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a className="py-2 block">Blogs</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-red-100"
                  onClick={()=>{dispath(signout())}}
                >
                  خروج
                </button>
                <Link href="/profile">
                  <a className="py-2 block">
                    Profile - <span className="text-sm">{user.name}</span>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <a className="block">ثبت نام</a>
                </Link>
                <Link href="/signin">
                  <a className="block">ورود</a>
                </Link>
              </>
              )} 
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
