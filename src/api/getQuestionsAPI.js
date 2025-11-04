export const getQuestionsAPI = async () => {
  try {
    const response = await fetch(
      ""
    );

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
