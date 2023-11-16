const objPlugins = {
  install(app, options) {
    console.log('objPlugins options: ', options);
    console.log('objPlugins app: ', app);
    // app.component('RouterView', RouterView); // 전역 컴포넌트를 등록
  },
};

export default objPlugins;
