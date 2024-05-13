"use client";

import { useRouter } from 'next/navigation';

function ScheduleBtn(props: any) {
  const router = useRouter();
  const handleClick = () => {
    const query = encodeURIComponent(JSON.stringify("S&D Next" ));
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
