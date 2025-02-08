const About = () => {
  const aboutText =
    "\
    서커스 디 랩( Circus D.Lab )은 서커스 드라마 연구소의 약자로 서커스를\
    배경으로 한 드라마를 연구하는 단체입니다.\
    현시대의 서커스가 가지는 실험적인 특성을 중시하고\
    기존의 틀에서 벗어난 창작 작업에 힘쓰고 있습니다.\
    가장 가까운 자신의 몸부터\
    저글링 도구, 무대 세트에 이르기까지\
    다양한 오브제에 대한 탐구와 실험을 통해\
    새로운 그림을 만들어 보여주고자 합니다.\
    그리고 그러한 새로운 속에서\
    현시대가 공감할 수 있는 메시지를 담고자 합니다.\
  ";

  return (
    <div className="">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative pt-[56.25%] mt-8 sm:mt-20">
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
      </div>

      <img src="/assets/v2025/jundia_profile_all.jpg" />
      <div className="flex flex-row w-1/2 pt-4">
        <img src="/assets/v2025/jundia_profile6.jpeg" />
        <img src="/assets/v2025/jundia_profile7.jpeg" />
      </div>
      <img src="/assets/v2025/jundia_profile8.jpeg" />
    </div>
  );
};

export default About;
