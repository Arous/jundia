import Gallery from "./CircusOfRockGallery";

const CircusOfRock = () => {
  // const { id } = useParams();

  return (
    <div className="mt-20">
      <div>
        <span className="text-2xl">&lt;로큰롤 서커스&gt;</span>

        <br />

        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <span className="text-4xl">서커스 오브 락</span>
          <span className="text-4xl">CIRCUS OF ROCK</span>
          <span className="h-1/2 bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            30 min
          </span>
        </div>

        <br />

        <blockquote>
          "레전더리 락 스타 가드레일 주니어의 로큰롤 서커스"
        </blockquote>
        <br />

        <br />
        <span>
          전설의 밴드 '드래곤 후르츠' <br />
          바로 그 밴드의 리더 '가드레일 주니어'가 선보이는 락스피릿 가득한 국내
          최초 로큰롤 서커스! <br />
          눈을 뗄 수 없는 에너지와 카리스마 가득한 그의 내한 콘서트에 여러분을
          초대합니다.
        </span>
      </div>

      <div className="flex justify-center mt-10 w-full h-96">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Ny0h3UK4R1E?si=GIkvsOLqdZgvXM8w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="mt-10">
        <Gallery />
      </div>
    </div>
  );
};

export default CircusOfRock;
