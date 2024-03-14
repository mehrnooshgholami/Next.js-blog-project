import { useAuth, useAuthActions } from "@/context/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Yup from "yup"
import { useDispatch , useSelector } from "react-redux";
import { userSignin } from "src/redux/user/userActions";
import Layout from "@/containers/Layout";

const SignIn = () => {
  const dispath = useDispatch()
  const {user} = useSelector(store=>store.userSignin)
  const router = useRouter()
  useEffect(() => {
    if (user) router.push("/");
  }, [user]);
  return (
    <Layout>
    <div>
      <Formik
        initialValues={
            {
              email: "",
              password: "",
            }
        }
        validationSchema={
          Yup.object({
              email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
              password: Yup.string()
                .required("رمز عبور را وارد کنید")
                .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
            })
        }
        onSubmit={
            (values) => {
                dispath(userSignin(values))
            }
        }
      >
        <div className="md:max-w-md px-4 md:px-4 container  mx-auto">
          <Form className="flex flex-col space-y-4">
            <h1 className="font-black text-2xl text-violet-700 mb-4">ورود</h1>
            <label className='h5 mt-2' htmlFor='email'>ایمیل</label>
            <Field label="ایمیل" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" name="email"/>
            <p className="text-red-500 mb-2">
              <ErrorMessage className="text-red-500" name="email"/>
            </p>
            <label className='h5 mt-2' htmlFor='password'>رمز عبور</label>
            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" name="password"/>
            <p className="text-red-500 mb-2">
              <ErrorMessage className="text-red-500" name="password"/>
            </p>
            <button className="w-full py-2 rounded-lg bg-violet-800 text-white" type='submit'>ورود</button>
            <Link href="/signup">
              <p className="mt-4 py-4 cursor-pointer">هنوز ثبت نام نکردی؟ لاگین</p>
            </Link>
          </Form>
        </div>
      </Formik>
      <button onClick={()=>{console.log(user);}}>log</button>
    </div>
    </Layout>
  )
}

export default SignIn