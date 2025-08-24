export interface IQuizSet {
  question: string;
  answer: number; // index of the correct alternative
  alternatives: string[];
}

export interface IResult {
  rightAnswers: number;
  amountOfAnswers: number;
  onClick: () => void;
}

export interface GameBoardProps {
  player: string;
}

export interface NextBtnProps {
  step: number;
  gameQuiz: IQuizSet[];
  answer: boolean;
  onClick: () => void;
}
