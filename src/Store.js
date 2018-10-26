import { observable } from "mobx";

class Store {
  @observable
  pfrDetails = "hello";
  @observable
  collapsed = false;

  toggle = () => {
    this.collapsed = !this.collapsed;
  };
}

export default new Store();
