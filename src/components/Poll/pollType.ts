export interface IPollData {
  question: string;
  options: IOptions[];
  id: any;
  pollState: "notStarted" | "preview" | "submited";
  participants: number;
}

export interface IOptions {
  title: string;
  votes: number;
  id: any;
}
