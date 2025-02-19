import { Card } from "@/components/ui/card";
import ClockDisplay from "@/components/clock-display";
import AlarmForm from "@/components/alarm-form";
import AlarmList from "@/components/alarm-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Web Alarm Clock
        </h1>
        
        <Card className="p-6">
          <ClockDisplay />
        </Card>

        <Card className="p-6">
          <AlarmForm />
        </Card>

        <Card className="p-6">
          <AlarmList />
        </Card>
      </div>
    </div>
  );
}
