import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';

@Injectable()
export class MemberService {
	constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}

	public async signup(input: MemberInput): Promise<Member> {
		// ToDO Hash Password
		try {
			const result = await this.memberModel.create(input);
			// TODO Authentication  via tokens
			return result;
		} catch (err) {
			console.log('Error, Service.model:', err);
			throw new BadRequestException(err);
		}
	}

	public async login(): Promise<string> {
		return 'login Executed';
	}

	public async updateMember(): Promise<string> {
		return 'updateMember Executed';
	}

	public async getMember(): Promise<string> {
		return 'getMember Executed';
	}
}