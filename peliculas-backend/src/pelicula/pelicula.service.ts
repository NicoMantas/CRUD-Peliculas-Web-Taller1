import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto.js';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';


@Injectable()
export class PeliculaService {

  constructor (private readonly prisma: PrismaService){}



  create(createPeliculaDto: CreatePeliculaDto) {
    return this.prisma.pelicula.create({
      data: createPeliculaDto,
    });
  }

  findAll() {
    return this.prisma.pelicula.findMany();
  }

  findOne(id: number) {
    return this.prisma.pelicula.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return this.prisma.pelicula.update({
      where: { id },
      data: updatePeliculaDto,
    });
  }

  remove(id: number) {
    return this.prisma.pelicula.delete({
      where: { id },
    });
  }
}
