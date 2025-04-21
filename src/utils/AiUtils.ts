export type ChatMode = 'creative' | 'balanced' | 'strict';
export type VersionType = 'GPT 3.5' | 'GPT 4';

export interface ChatSettings {
  mode: ChatMode;
  version: VersionType;
  showResourceLink: boolean;
  showProposedPrompt: boolean;
  darkMode: boolean;
}

export interface InfoCardItem {
  id: string;
  text: string;
  hasLink?: boolean;
}

export interface InfoCardData {
  title: string;
  iconClass: string;
  iconBackground: string;
  items: InfoCardItem[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface User {
  id: number;
  username: string;
  displayName: string;
  initials: string;
}

export interface PlanInfo {
  name: string;
  activeUsers: number;
  isActive: boolean;
}
