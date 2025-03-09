import { Moon, Palette, Terminal, Sparkles, Monitor, Globe } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme options after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Add a small delay to ensure the theme change is processed
    setTimeout(() => {
      toast.success(`Theme switched to ${newTheme}!`, {
        duration: 2000,
      });
    }, 100);
  };

  // Function to trigger browser's built-in translation
  const triggerBrowserTranslation = () => {
    toast.info("Please use your browser's built-in translation feature", {
      description: "Look for the translate icon in your browser's address bar or right-click menu",
      duration: 5000,
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-background border-border rounded-xl p-6 shadow-sm border">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Application Settings
      </h2>
      
      <div className="space-y-6">
        {/* Language Settings */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-primary" />
            <div>
              <Label className="text-base font-medium text-foreground">Language</Label>
              <p className="text-sm text-muted-foreground">Translate this website to your preferred language</p>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-muted/20">
            <p className="text-sm mb-4">
              This website supports translation through your browser's built-in translation feature. 
              For the best experience on mobile devices, please use your browser's translation option.
            </p>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={triggerBrowserTranslation}
            >
              <Globe className="h-4 w-4" />
              <span>How to Translate</span>
            </Button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Palette className="h-5 w-5 text-primary" />
            <div>
              <Label className="text-base font-medium text-foreground">Theme</Label>
              <p className="text-sm text-muted-foreground">Choose your visual style</p>
            </div>
          </div>

          <RadioGroup
            value={theme}
            onValueChange={handleThemeChange}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
          >
            <div>
              <RadioGroupItem
                value="system"
                id="system"
                className="peer sr-only"
              />
              <Label
                htmlFor="system"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Monitor className="h-5 w-5" />
                  <div>System Default</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="light"
                id="light"
                className="peer sr-only"
              />
              <Label
                htmlFor="light"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5" />
                  <div>Light Mode</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="dark"
                id="dark"
                className="peer sr-only"
              />
              <Label
                htmlFor="dark"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Moon className="h-5 w-5" />
                  <div>Dark Mode</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="soft-pastel"
                id="soft-pastel"
                className="peer sr-only"
              />
              <Label
                htmlFor="soft-pastel"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Palette className="h-5 w-5" />
                  <div>Soft Pastel</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="dos-prompt"
                id="dos-prompt"
                className="peer sr-only"
              />
              <Label
                htmlFor="dos-prompt"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Terminal className="h-5 w-5" />
                  <div>DOS Prompt</div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="synthwave"
                id="synthwave"
                className="peer sr-only"
              />
              <Label
                htmlFor="synthwave"
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5" />
                  <div>Synthwave</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Settings;
