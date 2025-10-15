import { DashboardHeader } from "@/app/dashboard/_components/dashboardHeader";
import { MetricsOverview } from "@/app/dashboard/_components/dashboardMetrics";
import { Navbar } from "@/components/navbar";
import { DashboardForm } from "./_components/dashboardForm";
import { SessionsList } from "./_components/dashboardSessions";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="w-full pt-24 px-4 md:px-8 lg:px-16">
                <DashboardHeader />
                <MetricsOverview totalDistance={120.5} totalDuration={540} averagePace={4.5} totalSessions={30} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
                    <DashboardForm />
                    <div className="lg:col-span-1">
                        <SessionsList />
                    </div>

                </div>
            </div>



        </>
    );
}