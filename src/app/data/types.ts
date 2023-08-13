import { Option } from "@/types";

export interface Location {
  id: number;
  title: LOCATION;
}

export interface Award {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export interface Position {
  id: number;
  title: string;
  start_date: Date;
  end_date: Option<Date>;
  achievements: Array<string>;
  software_tools: Array<SOFTWARE_TOOL>;
  responsibilities: Array<RESPONSIBILITY>;
  organization: ORGANIZATION;
  locations: Array<Location>;
  awards: Array<Award>;
}

export enum SOFTWARE_TOOL {
  JS = "Javascript",
  TS = "Typescript",
  REACT = "React",
  REDUX = "Redux",
  PIXI = "Pixi.js",
  DJANGO_REST = "Django REST Framework",
  POSTGIS = "PostGIS",
  MAPBOX = "Mapbox-gl-js",
  DOCKER = "Docker",
  JEKYLL = "Jekyll for Ruby",
  TRAVIS_CI = "Travis CI",
  GH_PAGES = "GitHub Pages",
}

export enum RESPONSIBILITY {
  FRONT_END = "Front end developer",
  BACK_END = "Back end developer",
  FULL_STACK = "Full stack developer",
  TACTICS_ADVISOR = "Tactics adviser",
  ATC = "Air traffic controller",
  LZSO = "Landing Zone Safety Officer",
  PROJECT_MANAGER = "Project manager",
  RESEARCH_ASSISTANT = "Research assistant",
  STUDENT = "Student",
}

export enum ORGANIZATION {
  TENET3 = "Tenet3",
  DCP = "NYC Dept. of City Planning",
  CFA = "Code for America, OpenOakland Brigade",
  OSS = "60 OSS (USAF)",
  CRS = "821 CRS (USAF)",
  PHOENIX = "Phoenix Spark Innovation lab (USAF)",
  BING_IE_CLUB = "Innovation and Entrepreneurship Club, Binghamton University",
  BING_SOE = "Thomas J. Watson School of Engineering, Binghamton University",
  NORTHWESTERN = "Northwestern University",
  HUNTER = "Hunter College, CUNY",
}

export enum LOCATION {
  EQUITABLE = "Equitable Building",
  TAFB = "Travis Air Force Base, CA",
  KAFB = "Keeler Air Force Base, MS",
  BING_CAMPUS = "Binghamton University",
  HUNTER_CAMPUS = "Hunter College",
  NORTHWESTERN_CAMPUS = "Northwestern University",
  OAKLAND_CITY_HALL = "Oakland, CA City Hall",
  STRATACACHE = "Stratacache Tower",
  CEIBA = "Ceiba, PR",
  MARATHON = "Marathon, FL",
}
