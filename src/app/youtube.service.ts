import {Injectable} from '@angular/core';
import {Video} from './video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  getVideoList(): Video[] {
    return [
      {
        title: 'Hãy trao cho anh',
        id: 'knW7-x7Y7RE'
      },
      {
        title: 'Lạc trôi',
        id: 'Llw9Q6akRo4'
      },
      {
        title: 'Chạy ngay đi',
        id: '32sYGCOYJUM'
      },
      {
        title: 'Sky tour 2019',
        id: 'Z2DvdjaEQtE'
      },
      {
        title: 'Nơi này có anh',
        id: 'FN7ALfpGxiI'
      },
      {
        title: 'Chúc mừng sinh nhật',
        id: 'rlU3cP7Qom8'
      },
    ];
  }

  constructor() {
  }
}
