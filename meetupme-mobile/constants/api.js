// http://10.109.156.51:3000/api/meetups This is the http://localhost:3000/api/meetups
// Home IP: 192.168.1.78 for 5.0 connection
import axios from 'axios';
import { Platform } from 'react-native';


let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://192.168.1.78:3000/api';
}

axios.defaults.baseURL = url;

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
