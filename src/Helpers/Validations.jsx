import * as yup from 'yup'



export const contactSchema=yup.object().shape({
    fullName:yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    photo:yup.string().required("تصویر مخاطب الزامی میباشد"),
    mobile:yup.number().required("شماره موبایل الزامی میباشد"),
    job:yup.string().required("انتخاب شغل الزامی میباشد"),
    city:yup.string().required("انتخاب شغل الزامی میباشد"),
    email:yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامی میباشد"),
})