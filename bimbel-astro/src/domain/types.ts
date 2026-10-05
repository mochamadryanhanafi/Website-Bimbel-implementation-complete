export type Level = 'TK' | 'SD';
export type SessionId = '1' | '2';

export interface Program {
  level: Level;
  tag: string;
  desc: string;
  normalPrice: number;
  promoPrice: number;
  features: string[];
  classes: string[];
}

export interface Session {
  id: SessionId;
  name: string;
  time: string;
  days: string;
}

export interface Subject {
  name: string;
  desc: string;
  icon: string;
  tone: 'primary' | 'peach' | 'green' | 'yellow' | 'purple';
}

export interface Faq {
  q: string;
  a: string;
}

export interface Registration {
  parent: string;
  child: string;
  level: Level | '';
  kelas: string;
  wa: string;
  sesi: SessionId | '';
  note: string;
}
