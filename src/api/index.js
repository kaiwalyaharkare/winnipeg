import axios from "axios";
import { AxiosRequestConfig } from "axios";
export const getstatus = async () => {
  try {
    const status = await axios.get(
      "https://api.winnipegtransit.com/v3/statuses/schedule.json?api-key="
    );
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const getNearbystops = async (lat, lng, radius) => {
  try {
    if (lat && lng && radius) {
      const { data } = await axios.get(
        `https://api.winnipegtransit.com/v3/stops.json?distance=${radius}`,
        {
          params: { lat: lng, lon: lat,'api-key':'' },
        }
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStopschedule = async (stopSchedule) => {

  var isoDate = new Date().toISOString()
  try {
    if (stopSchedule && Date.now()) {
      const { data } = await axios.get(
        `https://api.winnipegtransit.com/v3/stops/${stopSchedule}/schedule.json?/schedule?max-results-per-route=2`,
        {params:
         {start: isoDate,'api-key':''},
        }
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

