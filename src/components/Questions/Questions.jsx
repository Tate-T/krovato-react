import { useState, useEffect } from "react";

import { QuestionItem } from "./QuestionItem";

import { getQuestionsAPI } from "../../api/getQuestionsAPI";

import containerStyle from "../Container/Container.module.scss";
import style from "./Questions.module.scss";

//Щоб підключити цю секцію пишіть так: <Questions sectionId="..." />, id секції може бути - "return-questions" або "bed-questions".

export const Questions = ({ sectionId }) => {
  const [ sections, setSections ] = useState([]);

  useEffect(() => {
    getQuestionsAPI().then(response => setSections(response));
  }, []);

  const currentSection = sections.find(section => section.id === sectionId);

  if (!currentSection) {
    return;
  }

  return (
    <section className={style.questions}>
      <div className={`${containerStyle.container} ${style.questions__container}`}>
        <h2 className={style.questions__title}>{currentSection.title}</h2>
      </div>
      <ul className={style.questions__list}>
        {currentSection.questions.map((item) => (
          <QuestionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </ul>
    </section>
  );
}


// import { Component } from "react";

// import { QuestionItem } from "./QuestionItem";

// import containerStyle from "../Container/Container.module.scss";
// import style from "./Questions.module.scss";

// //Щоб підключити цю секцію пишіть так: <Questions sectionId="..." />, id секції може бути - "return-questions" або "bed-questions".

// export class Questions extends Component {
//   state = {
//     sections: []
//   };

//   async componentDidMount() {
//     try {
//       const response = await fetch(
//         "https://683742e1664e72d28e4422e4.mockapi.io/questionsData"
//       );

//       const data = await response.json();

//       this.setState({
//         sections: data
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     const { sectionId } = this.props;
//     const { sections } = this.state;

//     const currentSection = sections.find(section => section.id === sectionId);

//     if (!currentSection) {
//       return;
//     }

//     return (
//       <section className={style.questions}>
//         <div className={`${containerStyle.container} ${style.questions__container}`}>
//           <h2 className={style.questions__title}>{currentSection.title}</h2>
//         </div>
//         <ul className={style.questions__list}>
//           {currentSection.questions.map((item) => (
//             <QuestionItem
//               key={item.id}
//               id={item.id}
//               question={item.question}
//               answer={item.answer}
//             />
//           ))}
//         </ul>
//       </section>
//     );
//   }
// }
