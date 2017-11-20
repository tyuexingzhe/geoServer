'use strict';

module.exports = app => {
  // 注册
  app.get('/api/user', 'user.query');
  app.post('/api/user', 'user.create');

  // 登录
  app.get('/api/session/loginStatus', 'session.loginStatus');
  app.post('/api/session', 'session.create');
  app.delete('/api/session', 'session.destroy');

  // 评论
  app.get('/api/comment/:id', 'comment.show');
  app.post('/api/comment', 'comment.create');

  // 首页
  app.get('/api/index', 'init');

  // 文章
  app.get('/api/article/:id', 'article.show');
  app.get('/api/article/page/:id', 'article.page');

  // 归档
  app.get('/api/archives/', 'archive.index');
  app.get('/api/archives/:year', 'archive.year');
  app.get('/api/archives/:year/:month', 'archive.month');

  // 分类
  app.get('/api/categories/:category', 'category.show');

  // 头像
  app.post('/api/avatar', 'avatar.create');

  //目录
  app.get('/api/menus','menu.showAll')

  //所有模型
  app.get('/api/models','model.showAll')

  //所有模型
  app.get('/api/posts','post.showAll')

  //获取dashboard数据
  app.get('/api/dashboard','dashboard.showAll')

  //获取所有资源节点的信息
  app.get('/api/resources','resource.showAll')

  //获取单个资源节点的信息
  app.get('/api/resource/:id','resource.showResource')

  //新增数据
  app.post('/api/resource','resource.updateResource')

  //删除一条数据
  app.delete('/api/resource/:id','resource.removeResource')

  //修改数据
  app.patch('/api/resource/:id','resource.patchResource')
};
