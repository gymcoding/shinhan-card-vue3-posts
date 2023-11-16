export default {
  install(app) {
    const person = {
      name: '홍길동',
      say() {
        alert(this.name);
      },
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
