import { BehaviorSubject } from "rxjs";

// @ts-ignore
const stats = new BehaviorSubject();

export const statService = {
  pushStats: (message) => stats.next({ stats: message }),
  getStats: () => stats.asObservable(),
};
