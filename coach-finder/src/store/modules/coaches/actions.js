export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.fname,
      lastName: data.lname,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://coach-finder-ants-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
    } else {
      context.commit('registerCoach', { ...coachData, id: userId });
    }
  },

  async loadCoaches(context) {
    const response = await fetch(
      `https://coach-finder-ants-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      //
    } else {
      const coaches = [];

      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas,
        };
        coaches.unshift(coach);
      }

      context.commit('setCoaches', coaches);
    }
  },
};
