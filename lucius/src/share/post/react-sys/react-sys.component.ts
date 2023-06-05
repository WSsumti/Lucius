import { Component } from '@angular/core';
import { faHeart, faRectangleList } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-react-sys',
  templateUrl: './react-sys.component.html',
  styleUrls: ['./react-sys.component.css'],
})
export class ReactSysComponent {
  likeIcon = faHeart;
  commentIcon = faRectangleList;
}
