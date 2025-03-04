import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Put,
  Body,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from './entities/image.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  ApiTags,
  ApiConsumes,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@ApiTags('images') // This ensures that all endpoints appear under the 'images' tag
@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  @ApiOperation({ summary: 'Upload an image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateImageDto })
  @ApiResponse({
    status: 201,
    description: 'Image uploaded successfully',
    type: Image,
  })
  async upload(@UploadedFile() file: Express.Multer.File): Promise<Image> {
    return this.imageService.upload(file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all images' })
  @ApiResponse({ status: 200, description: 'List of images', type: [Image] })
  async findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get image by ID' })
  @ApiResponse({ status: 200, description: 'Image details', type: Image })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async findOne(@Param('id') id: string): Promise<Image> {
    return this.imageService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update image details' })
  @ApiResponse({
    status: 200,
    description: 'Updated image details',
    type: Image,
  })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto,
  ): Promise<Image> {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an image' })
  @ApiResponse({ status: 204, description: 'Image deleted successfully' })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.imageService.remove(+id);
  }
}
