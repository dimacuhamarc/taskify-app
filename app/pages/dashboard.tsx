import { UserData } from "~/utilities/onboardingtypes"
import { Navbar } from "~/components/navbar";

interface DashboardProps {
  propdata: UserData;
  id: number;
  email: string;
  name: string;
}

const Dashboard: React.FC<DashboardProps> = ({propdata} : DashboardProps) => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-950 to-purple-950 h-full">
        <div className="h-full gap-6 pl-16">
          <h1>Welcome {propdata.name}</h1>
          <p>Your email is: {propdata.email}</p>
        </div>
      </div>
    </>
    
  )
}

export default Dashboard;