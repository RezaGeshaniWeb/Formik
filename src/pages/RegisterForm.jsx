import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-6 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          ایجاد حساب کاربری ✨
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            jender: "",
            checked: false,
          }}
          validate={(values) => {
            const errors = {};

            if (values.name === "") {
              errors.name = "وارد کردن نام اجباری می باشد";
            } else if (values.name.length < 4) {
              errors.name = "طول نام حداقل باید 4 کاراکتر باشد";
            }

            if (values.email === "") {
              errors.email = "وارد کردن ایمیل اجباری می باشد";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "ایمیل وارد شده معتبر نیست";
            }

            if (values.password === "") {
              errors.password = "مشخص کردن رمز اجباری می‌باشد";
            } else if (
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(
                values.password
              )
            ) {
              errors.password =
                "رمز باید حداقل ۸ کاراکتر و شامل حروف بزرگ، کوچک، عدد و علامت خاص باشد";
            }

            if (!values.checked) {
              errors.checked = "برای ثبت‌نام باید قوانین را بپذیرید";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Inputs Data : ", values);
            setTimeout(() => {
              setSubmitting(false);
            }, 3000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="نام و نام خانوادگی"
                  className="w-full text-right px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-sm text-red-500 text-right mt-1"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  className="w-full text-right px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-right text-red-500 mt-1"
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                  className="w-full px-4 text-right py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500 text-right mt-1"
                />
              </div>

              <div>
                <Field
                  name="jender"
                  as="select"
                  className="w-full text-right px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-400 text-gray-700"
                >
                  <option value="">انتخاب جنسیت</option>
                  <option value="man">مرد</option>
                  <option value="woman">زن</option>
                </Field>
              </div>

              <label className="flex items-center flex-row-reverse gap-x-2 mt-2 mb-4 text-sm text-gray-600">
                <Field
                  type="checkbox"
                  name="checked"
                  className="w-4 h-4 text-blue-500 accent-blue-500"
                />
                <span>قوانین را می‌پذیرم</span>
              </label>

              <ErrorMessage
                name="checked"
                component="p"
                className="text-sm text-red-500 text-right mb-3"
              />

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-2 rounded-lg cursor-pointer font-medium transition-colors text-white ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                  }`}
              >
                {isSubmitting ? "...در حال ثبت" : "ثبت‌نام"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-2">
                حساب داری؟{" "}
                <Link to={'/sign-in'} className="text-blue-500 hover:underline cursor-pointer">
                  ورود
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
