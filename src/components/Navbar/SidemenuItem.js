import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';



export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon style={{color:"white",width:"25px",height:"25px"}} />,
      cName: 'nav-text'
    },
    {
      title: 'Trending',
      path: '/',
      icon: <LocalFireDepartmentIcon style={{color:"white",width:"25px",height:"25px"}} />,
      cName: 'nav-text'
    },

    {
      title: 'Subscriptions',
      path: '/',
      icon: <SubscriptionsIcon style={{color:"white",width:"25px",height:"25px"}} />,
      cName: 'nav-text'
    },

  ];