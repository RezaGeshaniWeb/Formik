import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(15, "نام نمی‌تواند بیش از ۱۵ کاراکتر باشد")
    .required("لطفاً نام خود را وارد کنید"),

  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .min(10, "ایمیل باید حداقل ۱۰ کاراکتر باشد")
    .max(30, "ایمیل نمی‌تواند بیش از ۳۰ کاراکتر باشد")
    .required("وارد کردن ایمیل الزامی است"),
});

export default registerSchema;
