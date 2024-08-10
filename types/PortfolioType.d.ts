export interface PortfolioItemProps {
  client: string;
  equipment: string;
  title: string;
  imageUrl: string[];
  part: string[];
  subTitle: string;
  id: number;
  url: string;
}

export interface PortFolioThemeProps {
  THEME: string;
  DATA: PortfolioItemProps[];
}
