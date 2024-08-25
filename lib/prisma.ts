import { PrismaClient } from '@prisma/client'
import { withOptimize } from '@prisma/extension-optimize';

let prisma: PrismaClient

declare const globalThis: {
    prisma: PrismaClient
}


if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient().$extends(withOptimize());
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient().$extends(withOptimize());
    }
    prisma = globalThis.prisma;
}

export default prisma;
