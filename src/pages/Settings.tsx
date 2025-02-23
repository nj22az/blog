
import { Moon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Application Settings</h2>
      
      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Moon className="h-5 w-5 text-brand-purple" />
            <div>
              <Label className="text-base font-medium text-brand-dark">Theme</Label>
              <p className="text-sm text-neutral-gray">Dark mode</p>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Settings;
