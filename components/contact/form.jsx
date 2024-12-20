'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
const Formsection = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    body: '',
  });
  const handleSubmit = (values, resetForm) => {
    console.log(values);
    resetForm();
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Field is empty'),
    lastName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Field is empty'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field is empty'),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
      .required('Field is empty'),
    body: Yup.string().required('Field is empty'),
  });
  return (
    <div className="md:w-[48%] w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        className="w-full"
      >
        {({ handleChange, errors, handleBlur, values, isSubmitting }) => (
          <Form className="py-4 ">
            <div className="flex flex-wrap gap-4 md:justify-center ">
              <div className="md:w-[48%] w-full">
                <label
                  htmlFor="firstname"
                  className="font-brandFont3 text-white"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full h-[2.8rem] rounded-lg focus:outline-none focus:ring-1 max-sm:focus:ring-2 focus:ring-brandGold px-3 text-brandBlack bg-white"
                ></Field>
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-sm text-brandGold max-sm:text-brandOrange"
                />
              </div>
              <div className="md:w-[48%] w-full ">
                <label
                  htmlFor="lastName"
                  className="font-brandFont3 text-white"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full h-[2.8rem] rounded-lg focus:outline-none focus:ring-1 max-sm:focus:ring-2 focus:ring-brandGold px-3 text-brandBlack bg-white"
                ></Field>
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-sm text-brandGold max-sm:text-brandOrange"
                />
              </div>
              <div className="md:w-[48%] w-full ">
                <label htmlFor="email" className="font-brandFont3 text-white">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  className="w-full h-[2.8rem] rounded-lg focus:outline-none focus:ring-1 max-sm:focus:ring-2 focus:ring-brandGold px-3 text-brandBlack bg-white"
                ></Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-brandGold "
                />
              </div>
              <div className="md:w-[48%] w-full">
                <label htmlFor="phone" className="font-brandFont3 text-white ">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="w-full h-[2.8rem] rounded-lg focus:outline-none focus:ring-1 max-sm:focus:ring-2 focus:ring-brandGold  px-3 text-brandBlack bg-white"
                ></Field>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-sm text-brandGold"
                />
              </div>
              <div className="w-full">
                {' '}
                <label htmlFor="body" className="font-brandFont3 text-white">
                  Type your message here
                </label>
                <textarea
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                  className=" w-full h-[200px] py-2 px-3 rounded-lg focus:outline-none focus:ring-1 max-sm:focus:ring-2  focus:ring-brandGold text-brandBlack bg-white"
                />
                {errors.body && (
                  <div className="text-sm text-brandGold max-sm:text-brandOrange">
                    {errors.body}
                  </div>
                )}
              </div>
            </div>
            {/* disabled={isSubmitting} */}
            <button
              type="submit"
              className="rounded-lg flex justify-self-end text-center justify-center items-center bg-brandGold font-semibold px-3 py-2 w-[120px] text-white mt-2"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formsection;
