

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return ( 
      <>
      <div className="preloader !z-50">
      <div className="box"></div>
  </div>
  <div className="cd-transition-layer !z-50">
      <div className="bg-layer"></div>
  </div>
      </>
    )
  }