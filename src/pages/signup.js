import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import * as Yup from "yup";
import  Router  from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "src/redux/user/userActions";
import Layout from "@/containers/Layout";


const SignUp = () => {
  const dispath = useDispatch()
  const {user} = useSelector((store)=>store.userSignin)

  useEffect(() => {
    if (user) Router.push("/");
  }, [user]);
  return (
    <Layout>
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("نام و نام خانوادگی را وارد کنید")
            .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
          email: Yup.string()
            .required("ایمیل را وارد کنید")
            .email("ایمیل نامعتبر است"),
          phoneNumber: Yup.string()
            .required("شماره موبایل را وارد کنید")
            .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
            .nullable(),
          password: Yup.string()
            .required("رمز عبور را وارد کنید")
            .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
            .required("رمز عبور هم خوانی ندارد"),
        })}
        onSubmit={({name,email,phoneNumber,password}) => {
          const values = {name,email,phoneNumber,password}
          dispath(userSignup(values))
          
        }}
      >

          <div className="md:max-w-md px-4 md:px-4 container mx-auto">
            <Form className="flex flex-col space-y-4">
              <h1 className="font-black text-2xl text-violet-700 mb-4">ثبت نام</h1>

              <label className='h5 mt-2' htmlFor='name'>نام و نام خانوادگی</label>
  
      <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" name="name"/>
  
            <p className="text-red-500 mb-2">
  
          <ErrorMessage className="text-red-500" name="name"/>
  
      </p>
  
      <label className='h5 mt-2' htmlFor='email'>ایمیل</label>
  
      <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" name="email"/>
  
            <p className="text-red-500 mb-2">
  
          <ErrorMessage className="text-red-500" name="email"/>
  
      </p>

      <label className='h5 mt-2' htmlFor='phoneNumber'>شماره موبایل</label>
  
  <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="phoneNumber" name="phoneNumber"/>

        <p className="text-red-500 mb-2">

      <ErrorMessage className="text-red-500" name="phoneNumber"/>

  </p>

  <label className='h5 mt-2' htmlFor='password'>رمز عبور</label>
  
  <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" name="password"/>

        <p className="text-red-500 mb-2">

      <ErrorMessage className="text-red-500" name="password"/>

  </p>

  <label className='h5 mt-2' htmlFor='confirmPassword'>تکرار رمز</label>
  
  <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="confirmPassword" name="confirmPassword"/>

        <p className="text-red-500 mb-2">

      <ErrorMessage className="text-red-500" name="confirmPassword"/>

  </p>

              <button
                className="w-full py-2 rounded-lg bg-violet-800 text-white"
                type="submit"
              >
                ورود
              </button>

              <Link href="/signin">
                <p className="mt-4 py-4 cursor-pointer">
                  قبلا ثبت نام کردی ؟ لاگین کنید
                </p>
              </Link>
            </Form>
          </div>
      </Formik>
    </div>
    </Layout>
  );
};

export default SignUp;
