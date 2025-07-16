import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export const TokenGuard = () => UseGuards(AuthGuard('jwt'));