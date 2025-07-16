import configEnvironment from "@configuration/environment/config-environment";
import { Global, Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [configEnvironment.KEY],
      useFactory: async (configService: ConfigType<typeof configEnvironment>) => {
        const { secretKey, expireTime } = configService.jwt;
        return {
          global: true,
          secret: secretKey || '',
          signOptions: {
            expiresIn: expireTime,
          }
        }
      }
    }),
  ],
  exports: [JwtModule]
})
export class JwtAuthModule {}