import Razorpay from "razorpay";

export const razorpay = new Razorpay(process.env.RAZORPAY_API_KEY!, {
    apiVersion: "2022-11-15",
    typescript: true,
});