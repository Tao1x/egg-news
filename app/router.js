'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  require('./router/article')(app);
  require('./router/upload')(app);
  require('./router/admin_login')(app);
  require('./router/admin_index')(app);
  require('./router/admin_article')(app);
  require('./router/admin_site')(app);
  require('./router/admin_collect')(app);
  require('./router/admin_source')(app);
  require('./router/admin_category')(app);
  require('./router/admin_link')(app);
  require('./router/admin_users')(app);
  require('./router/feedback')(app);
  require('./router/login')(app);
  require('./router/search')(app);
  require('./router/verify')(app);
  // 个人主页
  require('./router/userhome')(app);
  // 用户中心
  require('./router/user_index')(app);
  require('./router/user_article')(app);
  require('./router/auth')(app);
  require('./router/API/api')(app);
};
