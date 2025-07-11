// components/ProjectDetail.jsx
import Image from "next/image";
export default function ProjectDetail({ project, mediaIndex, setMediaIndex }) {
  return (
    <div className="w-full md:w-[55%] flex flex-col justify-center px-2 md:px-4">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
        {project.title}
      </h2>
      <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-5 text-gray-300">
        {project.description}
      </p>
      
      {/* Slimmer Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 mb-1">
          <span>Progress</span>
          <span>{project.progress}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-1">
          <div 
            className="bg-[#D4AF37] h-1 rounded-full" 
            style={{ width: project.progress }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
        <div>
          <p className="text-gray-400">Client</p>
          <p>{project.client}</p>
        </div>
        <div>
          <p className="text-gray-400">Location</p>
          <p>{project.location}</p>
        </div>
        <div>
          <p className="text-gray-400">Status</p>
          <p className={project.status === 'Ongoing' ? 'text-yellow-400' : 'text-green-400'}>
            {project.status}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Started</p>
          <p>{project.startDate}</p>
        </div>
      </div>
    </div>
  );
}