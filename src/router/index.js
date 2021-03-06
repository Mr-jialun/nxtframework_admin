import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/set',
    component: Layout,
    meta: { title: '基本设置', icon: 'set', affix: false },
    children: [
      {
        path: 'sys',
        component: () => import('@/views/set/sys'),
        name: 'WebSet',
        meta: { title: '系统设置', affix: false }
      },
      // {
      //   path: 'pic',
      //   component: () => import('@/views/set/pic'),
      //   name: 'pic',
      //   meta: { title: '图片存储配置', affix: false }
      // },
      // {
      //   path: 'oss',
      //   component: () => import('@/views/set/oss'),
      //   name: 'OssSet',
      //   meta: { title: '图片搬家', affix: false }
      // },
    ]
  },
  {
    path: '/shop',
    component: Layout,
    meta: { title: '商城设置', icon: 'shopping', affix: true },
    children: [
      {
        path: 'set',
        component: () => import('@/views/shop/set'),
        name: 'set',
        meta: { title: '基本部分', affix: false }
      },
      {
        path: 'pay',
        component: () => import('@/views/set/pay'),
        name: 'pay',
        meta: { title: '支付方式管理', affix: false }
      }
    ]
  },
  {
    path: '/delivery',
    component: Layout,
    meta: { title: '物流设置', icon: 'tree-table', affix: false },
    children: [
      {
        path: 'region',
        component: () => import('@/views/delivery/region'),
        name: 'region',
        meta: { title: '地区管理', affix: false }
      },
      {
        path: 'company',
        component: () => import('@/views/delivery/company'),
        name: 'company',
        meta: { title: '快递管理', affix: false }
      },
      {
        path: 'config',
        component: () => import('@/views/delivery/config'),
        name: 'config',
        meta: { title: '运费模版管理', affix: false }
      },
      {
        path: 'create',
        component: () => import('@/views/freight/create'),
        name: 'CreateFreight',
        hidden: true,
        meta: { title: '创建运费', affix: false }
      },
      {
        path: 'update/:id',
        props: true,
        hidden: true,
        component: () => import('@/views/freight/update'),
        name: 'UpdateFreight',
        meta: { title: '修改产品', affix: false }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    meta: { title: '订单管理', icon: 'tab', affix: false },
    children: [
      {
        path: 'orderFrom',
        component: () => import('@/views/order/orderFrom'),
        name: 'orderFrom',
        meta: { title: '订单管理', affix: false }
      },
      {
        path: 'orderFromRefund',
        component: () => import('@/views/order/orderFromRefund'),
        name: 'orderFromRefund',
        meta: { title: '订单售后', affix: false }
      }
    ]
  },



  {
    path: '/product',
    component: Layout,
    meta: { title: '产品管理', icon: 'product', affix: false },
    children: [
      {
        path: 'product',
        component: () => import('@/views/product/index'),
        name: 'product',
        meta: { title: '产品列表', affix: false }
      },
      {
        path: 'trash',
        component: () => import('@/views/product/trash'),
        name: 'trash',
        meta: { title: '回收站', affix: false }
      },
      {
        path: 'create',
        component: () => import('@/views/product/create'),
        name: 'CreateProduct',
        hidden: true,
        meta: { title: '创建产品', affix: false }
      },
      {
        path: 'update/:id',
        props: true,
        hidden: true,
        component: () => import('@/views/product/update'),
        name: 'UpdateProduct',
        meta: { title: '修改产品', affix: false }
      },
      {
        path: 'kind',
        component: () => import('@/views/product/kind'),
        name: 'KindProduct',
        hidden: false,
        meta: { title: '产品分类', affix: false }
      },
      {
        path: 'brand',
        component: () => import('@/views/product/brand'),
        name: 'brand',
        hidden: false,
        meta: { title: '品牌管理', affix: false }
      }
    ]
  },
  {
    path: '/reviews',
    component: Layout,
    meta: { title: '评论管理', icon: 'skill', affix: false },
    children: [
      {
        path: 'reviews',
        component: () => import('@/views/reviews/index'),
        name: 'reviews',
        meta: { title: '评论列表', affix: false }
      },
      {
        path: 'detail/:id',
        hidden: true,
        component: () => import('@/views/reviews/detail'),
        name: 'reviewsDetail',
        meta: { title: '评论详情', affix: false }
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    meta: { title: '会员列表', icon: 'user', affix: false },
    children: [
      {
        path: 'memberManage',
        component: () => import('@/views/member/memberManage'),
        name: 'memberManage',
        meta: { title: '会员列表', affix: false }
      },
      {
        path: 'memberLevel',
        component: () => import('@/views/member/memberLevel'),
        name: 'memberLevel',
        meta: { title: '会员等级', affix: false }
      }
    ]
  },
  {
    path: '/commission',
    component: Layout,
    meta: { title: '分销管理', icon: 'tree', affix: false },
    children: [
      {
        path: 'commissionSet',
        component: () => import('@/views/commission/commissionSet'),
        name: 'commissionSet',
        meta: { title: '分销设置', affix: false }
      },
      {
        path: 'commissionLog',
        component: () => import('@/views/commission/commissionLog'),
        name: 'commissionLog',
        meta: { title: '分销日志', affix: false }
      }
    ]
  },
  {
    path: '/transaction',
    component: Layout,
    meta: { title: '财务管理', icon: 'money', affix: false },
    children: [
      {
        path: 'transactionList',
        component: () => import('@/views/transaction/transactionList'),
        name: 'transactionList',
        meta: { title: '用户资金记录', affix: false }
      },
      {
        path: 'withdrawManage',
        component: () => import('@/views/transaction/withdrawManage'),
        name: 'withdrawManage',
        meta: { title: '用户提现管理', affix: false }
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    meta: { title: '内容管理', icon: 'content', affix: false },
    children: [
      {
        path: 'list',
        component: () => import('@/views/content/list'),
        name: 'list',
        meta: { title: '资讯列表', affix: false }
      },
      {
        path: 'create',
        component: () => import('@/views/content/create'),
        name: 'CreateContent',
        hidden: true,
        meta: { title: '创建资讯', affix: false }
      },
      {
        path: 'update/:id',
        props: true,
        hidden: true,
        component: () => import('@/views/content/update'),
        name: 'UpdateContent',
        meta: { title: '修改资讯', affix: false }
      },
      {
        path: 'kind',
        component: () => import('@/views/content/kind'),
        name: 'KindContent',
        hidden: false,
        meta: { title: '资讯分类', affix: false }
      },
      {
        path: 'pages',
        component: () => import('@/views/page/list'),
        name: 'PageSet',
        meta: { title: '页面管理', affix: false }
      },
      {
        path: 'edit/:id',
        props: true,
        hidden: true,
        component: () => import('@/views/page/page_edit'),
        name: 'PageEdit',
        meta: { title: '编辑页面', affix: false }
      },
      {
        path: 'banner',
        component: () => import('@/views/market/banner'),
        name: 'banner',
        meta: { title: '轮播横幅', affix: false }
      },
    ]
  },

  {
    path: '/message',
    component: Layout,
    meta: { title: '留言管理', icon: 'message', affix: false },
    children: [
      {
        path: 'index',
        component: () => import('@/views/message/index'),
        name: 'Message',
        meta: { title: '留言管理', icon: 'message', affix: false }
      }
    ]
  },

  {
    path: '/acl',
    component: Layout,
    meta: { title: '权限管理', icon: 'peoples', affix: false },
    children: [
      {
        path: 'user',
        component: () => import('@/views/acl/user'),
        name: 'UserSet',
        meta: { title: '用户管理', affix: false }
      },
      {
        path: 'role',
        component: () => import('@/views/acl/role'),
        name: 'AclRole',
        meta: { title: '角色管理', affix: false }
      },
      {
        path: 'group',
        component: () => import('@/views/acl/group'),
        name: 'AclGroup',
        meta: { title: '权限分组', affix: false }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
