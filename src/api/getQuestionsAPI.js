export const getQuestionsAPI = async () => {
    try {
        const response = fetch(
          "https://683742e1664e72d28e4422e4.mockapi.io/questionsData"
        ).then(data => data.json());
  
        // const data = response.json();
  
        // setSections(data);
      } catch (error) {
        console.error(error);
      }
}