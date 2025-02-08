const Landing = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative pt-[56.25%] mt-20">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={
              "https://www.youtube.com/embed/XTYPIuYBxcE?si=WuLzDHTkZYt_8qhe"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        {/* 
        <div className="py-12 md:py-20">
          <div className="text-center pb-12 md:pb-0">
            <h1 className="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                이준상
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 whitespace-nowrap">
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <span className="mt-5 text-xl text-gray-600 mb-8 dark:text-slate-400">
                준디아 / 이준상은 2016 중국 대만 국제 디아볼로 경연대회 금상에
                빛나는 <br />
                대한민국 최고의 서커스 디아볼로 공연자이다.
              </span>
              <br />
              <span className="mt-5 text-xl text-gray-600 mb-8 dark:text-slate-400">
                전 세계 22개국을 여행하며 공연한 경험을 바탕으로 <br />
                현대 서커스 공연 창작과 오브제 리서치를 하고 있다.
              </span>
              <br />
              <span className="mt-5 text-xl text-gray-600 mb-8 dark:text-slate-400">
                서커스 창작 단체 서커스 디 랩 소속
              </span>
              <br />
              <br />
              <span className="mt-5 text-xl text-gray-600 mb-8 dark:text-slate-400">
                대표작 날갯짓, 서커스올림픽
              </span>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
