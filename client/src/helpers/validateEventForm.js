export const validateEventForm = (eventData) => {
  if (eventData.title.length === 0  ) {
    return {
      error: true,
      message: "Title is required",
    };
  }
};
