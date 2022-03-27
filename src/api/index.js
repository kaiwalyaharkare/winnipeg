import axios from "axios";
import { AxiosRequestConfig } from "axios";
export const getstatus = async () => {
  try {
    const status = await axios.get(
      "https://api.winnipegtransit.com/v3/statuses/schedule.json?api-key=4aH9zYUORhi2cVxdGsJv"
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
        `https://api.winnipegtransit.com/v3/stops.json?api-key=4aH9zYUORhi2cVxdGsJv&distance=${radius}`,
        {
          params: { lat: lng, lon: lat },
        }
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStopschedule = async (stopSchedule) => {
  try {
    if (stopSchedule && Date.now()) {
      const { data } = await axios.get(
        `https://api.winnipegtransit.com/v3/stops/${stopSchedule}/schedule.json?/schedule?max-results-per-route=2&api-key=4aH9zYUORhi2cVxdGsJv`,
        {params:
         {start:'2022-03-30T21:00:00'},
        }
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// https://api.winnipegtransit.com/v3/stops.json?api-key=4aH9zYUORhi2cVxdGsJv&lat=49.895&lon=-97.138&distance=250

// https://api.winnipegtransit.com/v3/stops.json?api-key=4aH9zYUORhi2cVxdGsJv&distance=250&lat=-97.138&lon=49.895
