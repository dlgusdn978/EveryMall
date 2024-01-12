import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
interface MyPageProps {
  data: any;
}

export default function Home() {
  return (
    <div>
      <h4>마이페이지 내용 작성</h4>
    </div>
  );
}
