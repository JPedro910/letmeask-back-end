import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../utils/errors";
import Helper from "../../../utils/helper/Helper";

export default class UpdatePasswordRules {

	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository();
	}

	async execute( { id, passwordCurrent, newPassword, newPasswordConfirm } ) {
        
		if (!passwordCurrent || !newPassword || !newPasswordConfirm)
			return new MissingParamError("Preencha todos os campos");

		const passwordCompare = Helper.compareEncryptPassword(passwordCurrent, await this.repository.getPasswordById(id));

		if (!passwordCompare)
			return new InvalidParamError("Senha atual incorreta");

		const passwordNewCompare = Helper.compareEncryptPassword(newPassword, await this.repository.getPasswordById(id));

		if (passwordNewCompare)
			return new InvalidParamError("A sua nova senha não pode ser igual a anterior");

		const { result, message } = Helper.isPasswordValid(newPassword); 

		if (!result)
			return new InvalidParamError(message);

		if (newPassword !== newPasswordConfirm)
			return new InvalidParamError("As senhas não coincidem");

		await this.repository.updatePasswordById(id, Helper.encryptPassword(newPassword));

		return "Senha atualizada com sucesso";
	}
}