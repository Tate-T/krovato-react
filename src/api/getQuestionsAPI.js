export const getQuestionsAPI = async () => {
  try {
    const response = await fetch(
      "https://683742e1664e72d28e4422e4.mockapi.io/questionsData"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Убеждаемся, что возвращаем массив
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching questions:", error);
    // Возвращаем пустой массив в случае ошибки
    return [];
  }
};
