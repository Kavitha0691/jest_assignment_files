export interface GameHeaderProps {
  player: string;
}

export interface CreatePlayerProps {
  setPlayer: (name: string) => void;
}

export interface IQuizSet {
  question: string;
  answer: number;
  alternatives: string[];
}

export interface ProgressBarProps {
  step: number;
  gameQuiz: IQuizSet[];
}

export interface QuizAreaProps {
  gameQuiz: IQuizSet[];
  step: number;
  answer: boolean;
  onClick: (index: number) => void;
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
