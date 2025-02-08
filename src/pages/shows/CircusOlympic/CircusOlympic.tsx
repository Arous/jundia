import CircusOlympicsGallery from "./CircusOlymPicsGallery";

const CircusOlympic = () => {
  // const { id } = useParams();

  return (
    <div className="mt-20">
      <div className="flex">
        <div className="flex ml-5">
          <div>
            <span className="text-2xl">&lt;서커스 드라마&gt;</span>

            <br />

            <div className="flex justify-center gap-1 flex-col sm:flex-row">
              <span className="text-4xl">서커스게임즈</span>
              <span className="text-4xl">CIRCUS GAMES</span>
              <span className="h-1/2 bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                30 min
              </span>
            </div>

            <br />

            <p>"서커스로 재해석된 인류 화합의 상징, 서커스게임즈"</p>
            <br />

            <span>
              오랜 트레이닝의 끝에 , 드디어 우리는 서커스 경기 무대에 선다.
              승리를 상징하는 5 개의 황금링 , 성화 , 사람들의 손에서 손으로
              이어지는 열정의 불꽃 , 그리고 만국기. 컬링부터 테니스까지 다양한
              종목들이 서커스로 재해석된 인류 화합의 상징 , 서커스 게임즈.
              서커스와 스포츠를 넘나드는 박진감 넘치는 두 남자의 경쟁이
              시작된다.
            </span>
            <br />
            <br />

            <span>
              서커스 게임즈는 스포츠 경기에서 느낄 수 있는 박진감과 서커스가
              가진 희열을 동시에 담아내었다. 서커스 게임즈의 두 선수는 같은
              목표를 향해 협동하다가도 경기에 임할 때는 치열하게 경쟁하는 모습을
              보인다. 이는 스포츠 경기들이 가지고 있는 특성을 잘 드러낸다.
              서커스 저글링 오브제로 창작된 경기는 짜여진 각본이 없는 리얼함으로
              관객들이 신선하고 즉흥적인 재미를 느낄 수 있다. 경쟁 속에서도
              승패를 떠나 서로를 인정하는 장면은 올림픽이 가진 스포츠맨십과
              감동을 선사한다.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full h-96">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jPt6xL13Qf4?si=A8wgwQA3Vpf9fH9h"
          title="YouTube video player"
          allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10">
        <CircusOlympicsGallery />
      </div>
    </div>
  );
};

export default CircusOlympic;
