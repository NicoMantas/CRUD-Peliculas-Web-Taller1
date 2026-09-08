import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PeliculaService } from './pelicula.service.js';
import { CreatePeliculaDto } from './dto/create-pelicula.dto.js';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto.js';

@Controller('pelicula')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) {}

  @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculaService.create(createPeliculaDto);
  }

  @Get()
  findAll(
    @Query('nombre') nombre?: string,
    @Query('pagina') pagina?: string,
    @Query('limite') limite?: string,
  ) {
    return this.peliculaService.findAll(
      nombre,
      Number(pagina) || 1,
      Number(limite) || 5,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeliculaDto: UpdatePeliculaDto) {
    return this.peliculaService.update(+id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculaService.remove(+id);
  }
}
