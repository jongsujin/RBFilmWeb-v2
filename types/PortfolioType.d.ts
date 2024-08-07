export interface PortfolioItemProps {
  id: number;
  first_by?: string;
  first_content?: string;
  image_url?: string;
  part?: string;
  second_by?: string;
  second_content?: string;
  sub_title?: string;
  title?: string;
  url?: string;
}

export interface PortFolioThemeProps {
  THEME: string;
  DATA: PortfolioItemProps[];
}
