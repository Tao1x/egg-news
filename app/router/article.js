'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/p/:id', controller.article.article);
  router.post('/articleList/:page', controller.articleList.post_articleList);
  router.get('/category/:englishName', controller.articleList.categorylist);
  router.get('/category/:englishName/:page', controller.articleList.categorylist);
  router.post('/category/:englishName/:page', controller.articleList.post_categoryList);
  router.get('/source/:id', controller.source.index);
};
