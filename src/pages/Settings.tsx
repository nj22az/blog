
import { useTranslation } from "react-i18next";
import { Globe, Moon, Bell } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">{t('app_settings')}</h2>
      
      <div className="space-y-6">
        {/* Language Settings */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Globe className="h-5 w-5 text-brand-purple" />
              <div>
                <Label className="text-base font-medium text-brand-dark">{t('language')}</Label>
                <p className="text-sm text-neutral-gray">{t('choose_language')}</p>
              </div>
            </div>
            <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="sv">Svenska</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-4">
            <Moon className="h-5 w-5 text-brand-purple" />
            <div>
              <Label className="text-base font-medium text-brand-dark">{t('theme')}</Label>
              <p className="text-sm text-neutral-gray">Dark mode</p>
            </div>
          </div>
          <Switch />
        </div>

        {/* Notifications Settings */}
        <div className="flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-brand-purple" />
            <div>
              <Label className="text-base font-medium text-brand-dark">{t('notifications')}</Label>
              <p className="text-sm text-neutral-gray">Enable notifications</p>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Settings;
