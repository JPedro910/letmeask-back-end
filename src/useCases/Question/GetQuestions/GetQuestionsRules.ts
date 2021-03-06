import { QuestionRepository } from "../../../repositories/Question/QuestionRepository/QuestionRepository";
import IGetQuestions from "./IGetQuestions";

export default class GetQuestionsRules {

	private repository: QuestionRepository;

	constructor() {
		this.repository = new QuestionRepository();
	}

	async execute( { roomCode }: IGetQuestions ) {
		return await this.repository.getQuestions(roomCode);
	}
}