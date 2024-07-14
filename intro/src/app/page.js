"use client";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>welcome to latest</h1>
      <Link href="/login">login</Link>
      <button onClick={() => alert("alerted")}>Click me</button>
    </div>
  );
};

export default page;
