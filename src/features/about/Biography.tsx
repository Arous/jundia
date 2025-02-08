const Biography = () => {
  return (
    <div>
      <section className="px-4 py-6 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl">
        <div className="grid gap-3 row-gap-10 ">
          <div className="md:py-2 md:pr-2 text-gray-700 dark:text-gray-400">
            <div className="flex justify-center items-center">
              <div className="w-1/2 mr-5"></div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-1/2 mr-5"></div>
            </div>

            <div className="lg:flex justify-center items-center">
              <div className="lg:w-1/2 mr-5">
                <p className="text-middle text-3xl font-bold text-gray-900 dark:text-slate-600">
                  Speciality
                </p>
              </div>
              <div className="lg:w-1/2 pt-2 pb-2">
                <p>Circus, Diabolo, Juggling, Magic</p>
              </div>
            </div>

            <div className="lg:flex justify-center items-center">
              <div className="lg:w-1/2 mr-5 ">
                <p className="text-middle font-bold text-3xl text-gray-900 dark:text-slate-600">
                  Award-Winning
                </p>
              </div>
              <div className="lg:w-1/2 pt-2 pb-2">
                <p>
                  2016 대만 포르모사 국제 디아볼로 경연대회 금상 <br />
                  2013 롯데백화점 마술대회 1위 <br />
                </p>
              </div>
            </div>

            <div className="lg:flex justify-center items-center">
              <div className="lg:w-1/2 mr-5">
                <p className="text-middle font-bold text-3xl text-gray-900 dark:text-slate-600">
                  BroadCast
                </p>
              </div>
              <div className="lg:w-1/2 pt-2 pb-2">
                <p>
                  2020 MBN 나야나 "서커스 디아볼로 아티스트" <br />
                  2012 SBS 스타킹 "군대마술" <br />
                </p>
              </div>
            </div>

            <div className="lg:flex justify-center items-center">
              <div className="lg:w-1/2 mr-5">
                <p className="text-middle font-bold text-3xl text-gray-900 dark:text-slate-600">
                  Circus Art
                </p>
              </div>
              <div className="lg:w-1/2 pt-2 pb-2">
                준디아 &lt;디웨이브&gt; <br />
                서커스디랩 &lt;원&gt; <br />
                댄스씨어터창 &lt;굿 사도&gt; <br />
                댄스씨어터창 &lt;라인.줄&gt; <br />
                준디아 &lt;서커스클래식&gt; <br />
                준디아 &lt;날갯짓&gt; <br />
                서커스디랩 &lt;서커스올림픽&gt; <br />
                준디아 &lt;레인보우쇼&gt; <br />
                퍼포머준 &lt;케이팝매직쇼&gt; <br />
              </div>
            </div>
          </div>
          {/* <div className="relative"> */}
          {/* <Picture
              className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
              src={import("~/assets/images/profiles/profile1.jpg")}
              widths={[400, 768]}
              sizes="(max-width: 768px) 100vw, 432px"
              alt="Astronaut"
              aspectRatio="5:7"
            /> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Biography;
