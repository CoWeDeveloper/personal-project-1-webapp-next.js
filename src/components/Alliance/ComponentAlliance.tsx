import React from 'react'
import Image from "next/image";
// Importing Assets
// import member1Pasha from '../../../public/assets/icons/Alliances/member1Pasha.svg';
// import member2Pseb from '../../../public/assets/icons/Alliances/member2Pseb.svg'
// import bgMemeber from '../../../public/assets/images/Alliance/bg-membership.png'

// importing components
import ChildAlliance from "./ChildAlliance";
import { allianceData } from '../../data/allianceData';

function ComponentAlliance() {
  // const images= [member1Pasha, member2Pseb]; // make an array of an object (A object inside an array)

  return (
    <>
    {allianceData.map((data : any) => (
      <ChildAlliance
        key={data.id}
        title={data.title}
        bgImage={data.bgImage}
        images={data.logo}
      />
    ))}
    </>
  )
}

export default ComponentAlliance;
