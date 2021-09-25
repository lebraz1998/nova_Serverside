import { HttpStatus } from '@nestjs/common';

export async function ReturnRes(data: Promise<any>) {
  const result = await data;
  return { statusCode: HttpStatus.OK, result: result ? result : {} };
}
