import AudioRecord from "../AudioRecord/AudioRecord";
import FileUpload from "../File Upload/FileUpload";
import Transcriptions from "../Transcriptions/Transcriptions";

export default function Dashboard() {
  return (
    <div className="bg-gray-900 w-full h-screen">
      <div className="text-center">
        <h1 className="text-2xl text-white py-10">Upload Your Voice file Or Record audio to transcript </h1>
        <div className="w-full flex justify-center pt-20">
          <div className="w-1/3 h-fit border ">
            <FileUpload />
          </div>
        </div>
        <div className="pt-5">
            <AudioRecord/>
        </div>
        <div className="pt-5">
            <Transcriptions/>
        </div>
      </div>
    </div>
  );
}
