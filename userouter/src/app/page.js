"use client";

import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const users = [
    {
      name: "nani1",
      password: "nani1",
    },
    {
      name: "nani2",
      password: "nani2",
    },
    {
      name: "nani3",
      password: "nani3",
    },
    {
      name: "nani4",
      password: "nani4",
    },
  ];

  const submithandler = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const userpassword = e.target.password.value;
    console.log(username, userpassword);
    const isuser = users.find((user) => user.name === username);
    if (isuser) {
      if (isuser.password === userpassword) {
        router.push("/login");
      } else {
        console.log("please enter your password correctly");
      }
    } else {
      console.log("user not found please register");
    }
  };

  return (
    <div>
      <h1>please login </h1>
      <form onSubmit={submithandler}>
        <input placeholder="enter you name" name="name" />
        <input placeholder="enter you password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
