
import Faq from "react-faq-component";
import Title from "./Title";

const data = {
    title: "",
    rows: [
        {
            title: "What is the purpose of this online group study assignment website?",
            content: `The purpose of this website is to facilitate collaboration and communication among students or group members for completing assignments and projects together.`,
        },
        {
            title: "How can I create an account on this website?",
            content:
                `Typically, you can create an account by clicking on the "Sign Up" or "Register" button and providing the required information, such as your name, email, and password.`,
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Yes, many online group study assignment websites allow users to join or create multiple study groups or courses, depending on their needs and interests.`,
        },
        {
            title: "Can I upload and share documents or assignments on this website?",
            content: "Yes, you can typically upload and share documents, assignments, and other relevant files within your study group for collaboration and feedback.",
        },
        {
            title: "What do I do if there are conflicts or issues within my study group?",
            content: "You can often reach out to a group administrator or moderator for assistance in resolving conflicts. Communication and understanding among group members are essential for a harmonious experience.",
        },
    ],
};

const styles = {
    bgColor: 'rgb(203,213,225)',
    titleTextColor: "black",
    rowTitleColor: "blue",
    rowContentColor: 'black',
    arrowColor: "",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const ReactFaq = () => {
    return (
        <div className=" mx-auto">
        <Title>Frequently asked Question</Title>
        <h1  className="text-2xl text-center -mt-7 mb-4 dark:text-white">(FAQ)</h1>
        <div className=" md:px-0">
          <div className="  rounded-lg">
         <div className="p-12 rounded-lg bg-[#CBD5E1]">
         <Faq
                data={data}
                styles={styles}
                config={config}
                
            />  
         </div>
          </div>
        </div>
        </div>
    );
};

export default ReactFaq;