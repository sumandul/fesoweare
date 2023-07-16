import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { useRouter } from "next/router";
import validator from "validator";
import { toast } from "react-toastify";

const MobileNumber = () => {
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [errorText, setErrorText] = useState("");
  const [visible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setErrorText("");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      if (!validator.isMobilePhone(values.phone, ["ne-NP"])) {
        setErrorText("Invalid Phone number");
        return;
      }
      setTimeout(() => {
        setErrorText("");
      }, 500);

      const mobileRegistrationResponse = await axios.post(
        "https://api.ktmkart.com/register/send-otp",
        {
          phone: values.phone,
        }
      );
      if (mobileRegistrationResponse.data.statusCode === 200) {
        toast.success(mobileRegistrationResponse.data.message);
        router.push("/register");
      }

      //   router.push({
      //     pathname: router.pathname.includes("vendor-otp")
      //       ? "/auth/signup-vendor"
      //       : "/auth/signup",
      //     query: { phone: values.phone },
      //   });
    } catch (err) {
      //   window.myError = err;
      //   setErrorText(err.response?.data.error?.message);
    }
  };
  return (
    <div className="flex py-20 items-center justify-center">
      <div>
        <div className=" bg-blue-50 py-3  flex text-center justify-center">
          <img src="../assets/lo.png" alt="" className=" w-1/4" />
        </div>
        <p className=" text-[13px] font-medium py-2">
          Please enter your moblie number below. You'll receive OTP code for
          registration
        </p>
        <div className=" w-[500px]">
          {errorText && <p className=" text-red-300">{errorText}</p>}
          <Form name="" className="py-2 " onFinish={onFinish}>
            <Form.Item
              name="phone"
              className=" text-[10px] "
              rules={[
                {
                  required: true,
                  message: "Enter your mobile number",
                },
              ]}
            >
              <Input
                type="number"
                name="phone"
                className=" border-[1px] py-3  w-full"
              />
            </Form.Item>

            <Form.Item className="text-center mt-5">
              <button
                type="submit"
                className="login-form-button btn primary-btn bg-blue-50 w-full py-1 text-white-200 "
              >
                Proceed
              </button>
            </Form.Item>

            <Form.Item className="text-center mb-1">
              Didn't Receive the OTP?
              <button type="submit" className="">
                Resend OTP
              </button>
            </Form.Item>
          </Form>
          {/* <form
          action="
            "
          onSubmit={handleNumber}
        >
          <div className=" bg-blue-50 py-3  flex text-center justify-center">
            <img src="../assets/lo.png" alt="" className=" w-1/4" />
          </div>
          <p className=" text-[13px] font-medium py-2">
            Please enter your moblie number below. You'll receive OTP code for
            registration
          </p>
          {visible && (
            <p className=" bg-red-400 text-center text-[12px] font-medium text-red-100">
              {errorText}
            </p>
          )}
          <input
            type="number"
            value={number}
            onChange={(e: any) => setNumber(e.target.value)}
            className="text-[12px] border-[1px] rounded-[2px] mt-2 w-full py-3 px-2 "
          />
          <div>
            <button
              type="submit"
              className=" bg-blue-50 mt-10 text-white-200 w-full py-2"
            >
              procced
            </button>
          </div>
        </form> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNumber;
