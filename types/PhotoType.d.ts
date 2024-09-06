export interface PhotoDataItemProps {
  id: number;
  photoDetailUrl: string[];
  photoSubTitle: string;
  photoThumbUrl: string[];
  photoTitle: string;
  textPosition: "right" | "left" | "center";
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
}

export interface PhotoDataProps {
  THEME: string;
  DATA: PhotoDataItemProps[];
}

export interface PhotoTempleteProps {
  id: number;
  firstUrl: string;
  secondUrl?: string;
  title: string;
  subTitle: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
}
