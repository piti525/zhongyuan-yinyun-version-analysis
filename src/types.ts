export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  color: string;
}

export interface TimelineCategory {
  name:string;
  events: TimelineEvent[];
}

export interface RadarChartDataPoint {
  subject: string;
  '瞿藏本': number;
  '訥庵本': number;
  '嘯餘譜本': number;
  '四庫全書本': number;
  '王文璧本': number;
  '葉以震本': number;
  '趙蔭棠本': number;
}

export interface VersionDetail {
  id: string;
  name: string;
  period: string;
  summary: string;
  analysis: string;
}