import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";
import ensureUserNotBeRoomAdmin from "../middlewares/ensureUserNotBeRoomAdmin";

import CreateQuestionController from "../useCases/Question/CreateQuestion/CreateQuestionController";
import DeleteQuestionController from "../useCases/Question/DeleteQuestion/DeleteQuestionController";
import GetQuestionsController from "../useCases/Question/GetQuestions/GetQuestionsController";

const router = Router();

router.post(
	"/question/:roomCode", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(ensureUserNotBeRoomAdmin), 
	adapterRouters(CreateQuestionController.handle)
);

router.delete(
	"/question/:roomCode/:questionId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(authenticateAdmin), 
	adapterRouters(DeleteQuestionController.handle)
);

router.get("/question/:roomCode", adapterRouters(GetQuestionsController.handle));

export default router;