import { useEffect, useRef } from "react";
import video2 from "../../assets/images/2.mp4";
import video3 from "../../assets/images/3.mp4";
import video4 from "../../assets/images/4.mp4";
const CoursesPlaylist = () => {
  const titleRef = useRef(null);
  const mainVideoRef = useRef(null);
  const videosRef = useRef(null);
  const data = [
    { id: 1, title: "الدرس الاول", src: video2 },
    { id: 2, title: "الدرس الثاني", src: video3 },
    { id: 3, title: "الدرس الثالث", src: video4 },
    { id: 4, title: "الدرس الرابع", src: video2 },
    { id: 5, title: "الدرس الخامس", src: video3 },
    { id: 6, title: "الدرس السادس", src: video4 },
    { id: 7, title: "الدرس السابع", src: video2 },
    { id: 8, title: "الدرس الثامن", src: video3 },
  ];

  function handelVideoClick() {
    let videoList = videosRef.current.querySelectorAll(".vid");
    let mainVideo = mainVideoRef.current;
    let title = titleRef.current;
    videoList.forEach((video) => {
      video.onclick = () => {
        videoList.forEach((vid) => vid.classList.remove("active-video"));
        video.classList.add("active-video");
        if (video.classList.contains("active-video")) {
          let src = video.children[0].getAttribute("src");
          mainVideo.setAttribute("src", src);
          let text = video.children[1].innerHTML;
          title.innerHTML = text;
        }
      };
    });
  }

  return (
    <div className="grid max-[770px]:grid-cols-[1fr] max-[1000px]:grid-cols-[1.5fr_1fr] max-[1000px]:p-[10px] grid-cols-[2fr_1fr] gap-4 items-start py-1 px-[5%] bg-slate-200">
      <div className="bg-violet-50 p-3 rounded-[5px]">
        <div>
          <video
            src={data[0].src}
            controls
            autoPlay
            ref={mainVideoRef}
            className="main-video w-full rounded-[5px]"
          ></video>
          <h3 ref={titleRef} className="title font-[23px] py-4">
            {data[0].title}
          </h3>
        </div>
      </div>
      <div
        ref={videosRef}
        className="video-list bg-violet-200 rounded-[5px] h-[520px] overflow-y-scroll"
      >
        {data.map((e, index) => {
          return (
            <div
              onClick={() => {
                handelVideoClick();
              }}
              key={e.id}
              className={
                index === 0
                  ? "active-video vid flex items-center gap-[15px] bg-violet-50 rounded-[5px] m-[10px] p-[10px] border border-primary cursor-pointer hover:bg-slate-200"
                  : "vid flex items-center gap-[15px] bg-violet-50 rounded-[5px] m-[10px] p-[10px] border border-primary cursor-pointer hover:bg-slate-200"
              }
            >
              <video src={e.src} className="w-[100px] rounded-[5px]"></video>
              <h3 className="font-[23px] py-4"> {e.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CoursesPlaylist;
