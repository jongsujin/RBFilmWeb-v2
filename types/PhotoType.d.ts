export interface PhotoDataItemProps {
  photoId: number;
  photoDetailUrl: string[];
  photoSubTitle: string;
  photoThumbUrl: string[];
  photoTitle: string;
  textPosition: "right" | "left" | "center";
}

export interface PhotoDataProps {
  THEME: string;
  DATA: PhotoDataItemProps[];
}

export interface PhotoTempleteProps {
  firstUrl: string;
  secondUrl?: string;
  title: string;
  subTitle: string;
}
