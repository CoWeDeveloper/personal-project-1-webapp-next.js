"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function ScheduleBtn(props: any) {
  const router = useRouter();
  // const handleClick = () => {
  //   const query = encodeURIComponent(JSON.stringify("S&D Next" ));
  //   router.push(`/demo?query=${query}`);
  //   console.log("S&D");
  // }
  return (
    <>
    <Link href={`/demo/${props.value}`}>
      <button  className={props.styleButton}>Schedule a Demo</button>
    </Link>
    </>
  )
}

export default ScheduleBtn;
