import { useFormik } from "formik";
import registerSchema from "../Validations/register";
import { Link } from "react-router-dom";

export default function SignIn() {
  const form = useFormik({
    initialValues: { name: "", email: "" },

    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Inputs Data : ", values);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },

    validationSchema: registerSchema
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          ورود به حساب ✨
        </h1>

        <form onSubmit={form.handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="نام کامل"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-right"
            />
            {form.errors.name && form.touched.name && (
              <p className={`text-sm text-red-500 mt-1 text-right error-msg ${form.errors.name && form.touched.name ? "active" : ""
                }`}>{form.errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="ایمیل"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right text-gray-700"
            />
            {form.errors.email && form.touched.email && (
              <p className={`text-sm text-red-500 mt-1 text-right error-msg ${form.errors.email && form.touched.email ? "active" : ""
                }`}>{form.errors.email}</p>
            )}
          </div>

          <button
            disabled={form.isSubmitting}
            type="submit"
            className={`w-full cursor-pointer py-2 rounded-lg font-medium text-white transition-colors ${form.isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            {form.isSubmitting ? "...در حال ورود" : "ورود"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">
            حساب نداری؟{" "}
            <Link to={'/register'} className="text-blue-500 hover:underline cursor-pointer">
              ثبت‌نام
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
