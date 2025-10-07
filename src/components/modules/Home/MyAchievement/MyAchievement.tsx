import staff from "@@/home/achivment/stafe.png"
import project from "@@/home/achivment/project.png"
import experience from "@@/home/achivment/experiance.png"
import client from "@@/home/achivment/client.png"
import CounterCard from "./CounterCard";

const MyAchievement = () => {
    const counterData =[
        {
            logo: staff,
            countNumber: "60 +",
            name: "Staff"
        },
        {
            logo: project,
            countNumber: "67 +",
            name: "Projects"
        },
        {
            logo: experience,
            countNumber: "5 +",
            name: "Experience"
        },
        {
            logo: client,
            countNumber: "50 +",
            name: "Clients"
        },
    ]
    return (
        <section id="myAchievement" className=" py-5 lg:py-16 my-10">
            <div className="main-container">
               <div className="md:flex grid grid-cols-2 gap-4 justify-between items-center">
                {
                    counterData.map((data, i) => {
                        return(
                            <CounterCard key={i} data={data}></CounterCard>
                        )
                    })
                }
               </div>
            </div>
        </section>
    );
};

export default MyAchievement;