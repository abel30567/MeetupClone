// http://10.109.156.51:3000/api/meetups This is the http://localhost:3000/api/meetups
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.78:3000/api';

const fakeGroupId = '58ffe6b4c3b42c0e4502effd';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }
}

export {
  MeetupApi,
};
