export const getQuestionsAPI = async () => {
  try {
    const response = await fetch(
      "https://683742e1664e72d28e4422e4.mockapi.io/questionsData"
    );

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
