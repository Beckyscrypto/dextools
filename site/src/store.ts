import Vue from 'vue';
import Vuex from 'vuex';
import Agenda from './models/agenda';
import Event from './models/event';
import axios from 'axios';

interface Schedule {
  [key: string]: Event;
}

interface State {
  agenda: Agenda;
  schedule: any;
  userName: string;
  conName: string;
  conEmail: string;
  dialogEventCode: string;
}

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    agenda: new Agenda(),
    schedule: {},
    userName: '',
    conName: '',
    conEmail: '',
    dialogEventCode: '',
  },

  mutations: {
    addEventToAgenda(state: State, code: string): void {
      state.agenda.addEvent(state.schedule[code]);
    },
    removeEventFromAgenda(state: State, code: string) {
      state.agenda.removeEvent(code);
    },
    setSchedule(state: State, schedule: Schedule) {
      state.schedule = schedule;
    },
    setConName(state: State, conName: string) {
      state.conName = conName;
    },
    setConEmail(state: State, conEmail: string) {
      state.conEmail = conEmail;
    },
    setUserName(state: State, userName: string) {
      state.userName = userName;
      localStorage.userName = userName;
    },
    setDialogEventCode(state: State, code: string): void {
      state.dialogEventCode = code;
    },
    clearDialogEventCode(state: State): void {
      state.dialogEventCode = '';
    },
  },
  actions: {
    loadSettings(context) {
      return axios.get('/settings.json').then((response: any) => {
        const settings = response.data;
        context.commit('setConName', settings.conName);
        context.commit('setConEmail', settings.conEmail);
        const schedule = scheduleJsonToEvents(settings.schedule);
        context.commit('setSchedule', schedule);
      });
    },
  },
});

function scheduleJsonToEvents(jsonObject: any): any {
  const scheduleObject = jsonObject.reduce((acc: any, event: any) => {
    acc[event.code] = event;
    return acc;
  }, {});
  Object.values(scheduleObject).forEach((event: any) => {
    const matches = event.description.match(/See [A-Z][0-9]{3}.$/g);
    if (matches) {
      const dereferencedCode = matches[matches.length - 1].substring(4, 8);
      const dereferencedEvent = scheduleObject[dereferencedCode];
      if (!dereferencedEvent) {
        console.error(`Tried to dereference non-existent event ${dereferencedCode}.`);
        return;
      }
      event.description += ` ${dereferencedEvent.description}`;
    }
  });
  return Object.assign({}, ...(Object.values(scheduleObject).map((e: any) => ({ [e.code]: new Event(e) }))));
}

export default store;
