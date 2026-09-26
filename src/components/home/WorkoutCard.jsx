import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workout/${workout.id}`}>
     <div className="bg-[#0b1220] border border-[#1b2130] rounded-3xl overflow-hidden hover:border-lime-400 hover:-translate-y-1 transition-all duration-300 h-full">

        
        

        <div className="relative h-56">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

       
       

        <div className="p-5">

          
          

          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-inline badge-success"
              >
                {group}
              </span>
            ))}
          </div>

         
         

          <h3 className="text-xl font-bold uppercase mb-3">
            {workout.name}
          </h3>

          
          

          <p className="text-gray-400 text-sm mb-5">
            {workout.equipment}
          </p>

          
          
          
          <div className="flex justify-between text-sm text-gray-400">

            <div className="flex items-center gap-1">
              <FaClock />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <FaFire />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <FaStar />
              <span>{workout.rating}</span>
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;