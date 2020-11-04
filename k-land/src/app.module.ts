import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {SubcriberSchema} from './schemas/subcriber.schema';


@Module({
  imports: [HttpModule, 
            MongooseModule.forRoot('mongodb+srv://duc:WvYi6PCXMG1oCmER@cluster0.quqmc.mongodb.net/email-subcriber?retryWrites=true&w=majority'),
            MongooseModule.forFeature([
              {name: 'Subcriber', schema: SubcriberSchema}]),
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
