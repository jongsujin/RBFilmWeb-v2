interface MainFilmProps {
  url: string;
}

function MainFilm({ url }: MainFilmProps) {
  return (
    <div className="w-full mt-7 flex justify-center items-center">
      <video autoPlay loop muted playsInline>
        <source src={url} type="video/mp4" />
        해당 브라우저에서는 재생할 수 없습니다.
      </video>
    </div>
  );
}

export default MainFilm;
