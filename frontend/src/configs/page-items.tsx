import {SvgIconComponent} from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home"
import AssignmentIcon from '@material-ui/icons/Assignment';

export interface IPageItem {
  url: string,
  icon: SvgIconComponent,
  text: string,
}

export const PageItems: Array<IPageItem> = [
  {
    url: '/',
    icon: HomeIcon,
    text: 'Home'
  },
  {
    url: '/blog',
    icon: AssignmentIcon,
    text: 'Blog',
  }
]
