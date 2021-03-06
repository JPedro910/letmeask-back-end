import { UserRepository } from "../../User/UserRepository/UserRepository";
import { RoomRepository } from "../../Room/RoomRepository/RoomRepository";
import { QuestionRepository } from "./QuestionRepository";

describe(("Test of question repository"), () => {

	beforeAll(async () => {
		const userRepository = new UserRepository();
		await userRepository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
		const roomRepository = new RoomRepository();
		await roomRepository.store("1", "1", "#45645489489", "Matemática");
	});

	afterAll(async () => {
		const roomRepository = new RoomRepository();
		await roomRepository.destroy("#45645489489");
		const userRepository = new UserRepository();
		await userRepository.destroy("1");
	});

	test("Should create question", async () => {
		const repository = new QuestionRepository();
		await repository.store("1", "1", "#45645489489", "Qual é a fórmula de Bhaskara");
	});

	test("Should get questions", async () => {
		const repository = new QuestionRepository();
		const question = await repository.getQuestions("#45645489489");
		expect(question[0].id).toBe("1");
		expect(question[0].roomCode).toBe("#45645489489");
		expect(question[0].name).toBe("Qual é a fórmula de Bhaskara");
	});

	test("Should delete question", async () => {
		const repository = new QuestionRepository();
		await repository.destroy("1");
	});
});