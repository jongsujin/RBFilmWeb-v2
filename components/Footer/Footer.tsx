export default function Footer() {
  return (
    <div className="w-full mb-10 text-left text-white">
      <p className="font-pre text-m mx-4">(주)알비필름</p>
      <div className="border border-t-white w-full my-3" />
      <div className="flex flex-col gap-2 font-pre text-xs mx-4">
        <p>대표 이사 : 최정훈</p>
        <p>
          경기도 성남시 분당 내곡로 155 KCC 웰츠타워 8층{" "}
          <span className="text-white opacity-25 mx-1">|</span> 사업자등록번호:
          528-86-02650
        </p>
        <p>
          rbfilmofficial@naver.com{" "}
          <span className="text-white opacity-25 mx-1">|</span> +82 10 7712 2492
        </p>
      </div>
    </div>
  );
}
