"use client";

import { useRouter } from 'next/navigation';

function ScheduleBtn(props: any) {
  const handleClick = () => {
    const router = useRouter();
    const query = encodeURIComponent(JSON.stringify({ value: "S&D Next" }));
    router.push(`/demo?query=${query}`);
    console.log("S&D");
  }
  return (
    <>
      <button onClick={handleClick} className={props.styleButton}>Schedule a Demo</button>
    </>
  )
}

export default ScheduleBtn;
