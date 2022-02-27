import { BehaviorSubject } from "rxjs";

// @ts-ignore
const stats = new BehaviorSubject();

export const statService = {
  storeAction: (message) => stats.next({ stats: message }),
  getStats: () => stats.asObservable(),
};

//Stat Container
export let db ={}
statService.getStats().subscribe((message) => {
    if(message != undefined){

      if(db[message.id] != undefined)
      db[message.id] = {}

      db[message.id][message.action] += 1 
    }
})
