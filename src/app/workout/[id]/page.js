import Image from "next/image";
import { FaClock, FaFire, FaStar, FaPlus, FaBookmark } from "react-icons/fa";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutDetails from "@/components/details/WorkoutDetails";
import { notFound } from "next/navigation";


const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        notFound();
    }

    const workout = await res.json();

    return (
        <>
            <Navbar />
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-10">



                    <div className="bg-[#0b1220] border border-[#1b2130] rounded-3xl overflow-hidden">
                        <div className="relative h-[800px]">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>




                    <div>

                        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                            {workout.name}
                        </h1>

                        <p className="text-gray-400 mb-6">
                            {workout.description}
                        </p>



                        <div className="flex flex-wrap gap-2 mb-8">
                            {workout.muscleGroups.map((group) => (
                                <span
                                    key={group}
                                    className="badge badge-inline badge-success"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>




                        <div className="bg-[#0b1220] border border-[#1b2130] rounded-3xl p-5 mb-8">

                            <h2 className="font-bold text-xl mb-4">
                                KEY SPECS
                            </h2>


                            <div className="space-y-4 text-sm">

                                <div className="flex justify-between">
                                    <span>Equipment</span>
                                    <span>{workout.equipment}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Difficulty</span>
                                    <span>{workout.difficulty}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Sets</span>
                                    <span>{workout.sets}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Reps</span>
                                    <span>{workout.reps}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Duration</span>
                                    <span>{workout.duration} min</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Calories</span>
                                    <span>{workout.caloriesBurned} kcal</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Rating</span>
                                    <span>{workout.rating}</span>
                                </div>

                            </div>

                        </div>





                        <div className="flex gap-6 mb-8 text-gray-300">

                            <div className="flex items-center gap-2">
                                <FaClock />
                                {workout.duration} min
                            </div>

                            <div className="flex items-center gap-2">
                                <FaFire />
                                {workout.caloriesBurned} kcal
                            </div>

                            <div className="flex items-center gap-2">
                                <FaStar />
                                {workout.rating}
                            </div>

                        </div>






                        <div className="bg-[#0b1220] border border-[#1b2130] rounded-3xl p-5 mb-8">

                            <h2 className="font-bold text-xl mb-4">
                                INSTRUCTIONS
                            </h2>

                            <ol className="space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3"
                                    >
                                        <span className="text-lime-400 font-bold">
                                            {index + 1}.
                                        </span>

                                        <span className="text-gray-300">
                                            {instruction}
                                        </span>
                                    </li>
                                ))}
                            </ol>

                        </div>



                        <WorkoutDetails workout={workout} />


                    </div>

                </div>


            </section>

            <Footer />
        </>

    );
};

export default WorkoutDetailsPage;