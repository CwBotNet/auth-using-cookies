import jwt from "jsonwebtoken";
import { asyncHandler, statusCode } from "../utils";
import type { Request, Response } from "express";

type UserDetails = {
  name: string;
  email: string;
  password: string;
};

const options = {
  httpOnly: true,
  secure: true,
};

const signUpController = asyncHandler(async (req: Request, res: Response) => {
  // get user details
  const { name, email, password }: UserDetails = req.body;
  console.log({
    body: {
      name,
      email,
      password,
    },
  });
  try {
    if (!email) {
      throw new Error("Please fill all fields");
    }

    // generate token
    const token = jwt.sign({ email }, "dummysecret", { expiresIn: "1h" });
    // send token in cookies
    // cookie.signedCookie("token", token, options);
    // @ts-ignore
    return res.status(statusCode.OK).cookie("token", token, options).json({
      success: true,
    });
  } catch (error: any) {
    console.log(error.message);
  }
});

const signInController = async (req: Request, res: Response) => {
  // get user details
  const { email, password }: UserDetails = req.body;
  // generate token
  const token = await req.cookies.token;
  const user = jwt.verify(token, "dummysecret");
  const refToken = jwt.sign({ email }, "dummysecret", { expiresIn: "1d" });
  // send a new token in cookies

  return res.status(200).cookie("refToken", refToken, options).json({
    success: true,
    refToken: refToken,
  });
};

export { signUpController, signInController };
