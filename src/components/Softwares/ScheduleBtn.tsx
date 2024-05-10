"use client";

import { useRouter } from 'next/navigation';

function ScheduleBtn(props: any) {
  const handleClick = () => {
    const router = useRouter();
    const query = { pathname: "/demo", value: "S&D Next" }  // encodeURIComponent(JSON.stringify());
    router.push(`/demo?query=${query}`);
    console.log("S&D")
  }
  return (
    <>
      <button onClick={handleClick} className={props.styleButton}>Schedule a Demo</button>
    </>
  )
}

export default ScheduleBtn;
