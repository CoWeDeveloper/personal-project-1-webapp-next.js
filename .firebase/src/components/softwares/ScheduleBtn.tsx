"use client";
import Link from 'next/link';

function ScheduleBtn(props: any) {

  return (
    <>
    <Link 
    href={`/demo/${props.value}#schedule`}>
      <button  className={props.styleButton}>Schedule a Demo</button>
    </Link>
    </>
  )
}

export default ScheduleBtn;
