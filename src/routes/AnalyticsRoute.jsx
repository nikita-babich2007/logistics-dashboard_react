import { KpiCards } from "../components/analytics/KpiCards";
import { TopLocationsBarChart } from "../components/analytics/TopLocationsBarChart";

export const AnalyticsRoute = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold">Analytics</h1>

            <KpiCards />

            <TopLocationsBarChart />
        </div>
    );
};