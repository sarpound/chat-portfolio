export interface Iwork {
  name: string;
  shortName: string;
  description: string;
  position: string;
  date: string;
  logoUrl: string;
  coverUrl: string;
  iconUrl: string;
  selected: boolean;
}

export interface IworkProject {
  name: string;
  routeName: string;
  companyName: string;
  description: string;
  techStack?: string[];
  imageUrl: string;
  loading: boolean;
  display: boolean;
}
