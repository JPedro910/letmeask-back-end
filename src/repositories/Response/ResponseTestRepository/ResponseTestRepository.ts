import prisma from "../../../../prisma/index";
import IResponseTestRepository from "./IResponseTestRepository";

export class ResponseTestRepository implements IResponseTestRepository {

	async createTestResponse(){
		try {
			await prisma.user.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beed",
					email: "joao@teste.com",
					name: "João Pedro",
					password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
					verificationToken: "544f818f5f5cd4cde44c611683fc71",
					verifiedEmail: true,
				}
			});
	
			await prisma.room.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					userId: "hh98bc1b-22f4-4fc6-be64-3d830068beed",
					code: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					name: "História"
				}
			});
		
			await prisma.user.create({
				data: {
					id: "hh98aa1b-22f4-4fc6-be64-3d83006abeec",
					email: "joao1000@teste.com",
					name: "João Pedro",
					password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
					verificationToken: "544f818f5f5cd4cde44c611683fc71",
					verifiedEmail: true
				}
			});
	
			await prisma.question.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					userId: "hh98aa1b-22f4-4fc6-be64-3d83006abeec",
					roomCode: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					name: "Quando aconteceu a revolução francesa?"
				}
			});
	
			await prisma.question.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beea",
					userId: "hh98aa1b-22f4-4fc6-be64-3d83006abeec",
					roomCode: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					name: "Quando o Brasil foi descoberto"
				}
			});
	
			await prisma.question.update({
				where: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beea"
				},
				data: {
					name: "Quando o Brasil foi descoberto"
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async deleteTestResponse(){
		try {
			await prisma.question.deleteMany({});
			await prisma.room.deleteMany({});
			await prisma.user.deleteMany({});
		}

		catch(e) {
			console.log(e);
		}
	}
}