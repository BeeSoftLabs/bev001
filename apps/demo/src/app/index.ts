import { PrismaClient } from '@prisma/client'
import { log } from './utils'

export async function index() {
  const prisma = new PrismaClient()

  // await prisma.user.create({
  //   data: {
  //     username: 'derlys',
  //   },
  // })

  // await prisma.user.update({
  //   where: { username: 'beeman' },
  //   data: { username: 'bee' },
  // })

  // await prisma.user.delete({
  //   where: { username: 'bee' },
  // })

  // const users = await prisma.user.findMany()
  // log(users)
  //
  // const count = await prisma.user.count()
  //
  // log(count)

  await prisma.post.create({
    data: {
      text: 'Hola Prisma',
      author: { connect: { username: 'derlys' } },
      comments: {
        create: { author: { connect: { username: 'derlys' } }, text: 'Hola Comment' },
      },
    },
  })

  const posts = await prisma.post.findMany({
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
    },
  })
  log(posts)

  const count = await prisma.post.count()
  log(count)
  // log('Bienvenido a BeeSoftLabs!')
  // log('HOLA BEV001!')
  // log({
  //   0: 'BEV001 - Prisma Desde Cero',
  //   1: 'Qué es Prisma?',
  //   2: 'Modelos de datos',
  //   3: 'Instalando Prisma',
  //   4: 'Primer Model: User',
  //   5: 'Operaciones CRUD',
  //   6: 'Relaciones: Post + Comment',
  // })
}
