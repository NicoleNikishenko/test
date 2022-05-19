import React from "react";

const App = () => {
  const response = {
    Ingredient_Sequence_and_Name:
      'מים, רכיבי אורז 10%, שמן חמניות, תוסף תזונה סידן: טריקלציום פוספאט( 0.1% סידן), מלח, עמילן מעובד (E-1450) מייצבים (קרגינן, גילאן גאם), ויטמין D (0.75 מק"ג ל100 גרם).',
  };

  const parsedResponse = JSON.parse(response);

  return (
    <div>
      <h1>{parsedResponse}</h1>
    </div>
  );
};

export default App;
