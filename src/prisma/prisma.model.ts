// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService for other modules to use
})
export class PrismaModule {}
