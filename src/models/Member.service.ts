import MemberModel from "../schema/Member.model";
import { Member, MemberInput, LoginInput } from "../libs/types/member";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  // Service methods for Member operations
}

export default MemberService;
