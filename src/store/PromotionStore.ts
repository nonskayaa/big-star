import { makeAutoObservable } from "mobx";

import { Promotion } from "../types/Promotion";

class PromotionStore {
  promotions: Promotion[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPromotions(newPromotions: Promotion[]) {
    this.promotions = newPromotions;
  }

  get promotionsList() {
    return this.promotions;
  }
}

export default new PromotionStore();
