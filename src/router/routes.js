import 'nprogress/nprogress.css'
import NotFound from '@/views/NotFound'
import {
  start,
  done,
  configure
} from 'nprogress'
configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, duration);
  })
}

function getPageComp(fn) {
  return async()=>{
    start();
    if (process.env.NODE_ENV === 'development') {
      await delay(2000)
    }
    const comp = await fn();
    done();
    return comp;
  }
}
export default [{
    name: 'Home',
    path: '/',
    component: getPageComp(() => import( /* webpackChunkName: "home" */ '@/views/Home')),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: getPageComp(() => import( /* webpackChunkName: "about" */ '@/views/About')),
    meta: {
      title: '关于我'
    }
  },
  {
    name: 'Blog',
    path: '/article',
    component: getPageComp(() => import( /* webpackChunkName: "blog" */ '@/views/Blog')),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'Project',
    path: '/project',
    component: getPageComp(() => import( /* webpackChunkName: "project" */ '@/views/Project')),
    meta: {
      title: '项目&效果'
    }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComp(() => import( /* webpackChunkName: "blog" */ '@/views/Blog')),
    meta: {
      title: '文章'
    }
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComp(() => import( /* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail')),
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'Message',
    path: '/message',
    component: getPageComp(() => import( /* webpackChunkName: "message" */ '@/views/Liuyan')),
    meta: {
      title: '留言板'
    }
  },
{
  name:'NotFound',
  path:'*',
  component:NotFound
}
]