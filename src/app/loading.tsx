export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="preloader bg-blue-800 fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center">
      <div className="box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block">
        <div className="after w-12 h-12 bg-white rounded-full animate-preloader absolute top-0 left-0"></div>
        <div className="before w-12 h-2 bg-black opacity-10 animate-preloader-shadow absolute top-14 left-0"></div>
      </div>
      <div className="cd-transition-layer fixed top-0 left-0 w-full h-full opacity-0 visible bg-ink bg-no-repeat bg-center bg-cover"></div>
    </div>
    )
  }