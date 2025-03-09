import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Settings, AlertTriangle, Wrench, CheckCircle2, XCircle, HelpCircle, FileText } from 'lucide-react';
import ToolNavigation from '@/components/ToolNavigation';

interface MaintenanceTask {
  id: string;
  title: string;
  frequency: string;
  description: string;
  tools: string[];
  safety: string[];
}

interface TroubleshootingItem {
  symptom: string;
  possibleCauses: string[];
  solutions: string[];
  severity: 'low' | 'medium' | 'high';
}

const maintenanceTasks: MaintenanceTask[] = [
  {
    id: "daily1",
    title: "Check Oil Level",
    frequency: "Daily",
    description: "Inspect oil level through sight glass. Should be between min and max marks.",
    tools: ["Visual inspection"],
    safety: ["Ensure compressor is off", "Wait for oil to settle"]
  },
  {
    id: "daily2",
    title: "Inspect for Leaks",
    frequency: "Daily",
    description: "Check for air, oil, or coolant leaks around seals and connections.",
    tools: ["Leak detection spray", "Flashlight"],
    safety: ["Wear safety glasses", "Do not touch pressurized parts"]
  },
  {
    id: "weekly1",
    title: "Clean Air Filters",
    frequency: "Weekly",
    description: "Remove and clean or replace air intake filters.",
    tools: ["Compressed air", "Replacement filters", "Basic hand tools"],
    safety: ["Wear dust mask", "Ensure power is off", "Follow filter specs"]
  },
  {
    id: "monthly1",
    title: "Belt Tension Check",
    frequency: "Monthly",
    description: "Check and adjust drive belt tension if necessary.",
    tools: ["Belt tension gauge", "Adjustable wrench"],
    safety: ["Lock out power", "Allow to cool", "Use proper lifting"]
  },
  {
    id: "quarterly1",
    title: "Oil Analysis",
    frequency: "Quarterly",
    description: "Take oil sample for analysis and check contamination levels.",
    tools: ["Oil sampling kit", "Clean containers"],
    safety: ["Wear gloves", "Avoid hot surfaces", "Proper disposal"]
  },
  {
    id: "annual1",
    title: "Major Service",
    frequency: "Annually",
    description: "Complete overhaul including bearing inspection and valve service.",
    tools: ["Full toolkit", "Replacement parts", "Testing equipment"],
    safety: ["Certified technician only", "Full lockout procedure", "System purge"]
  }
];

const troubleshootingGuide: TroubleshootingItem[] = [
  {
    symptom: "Excessive Noise",
    possibleCauses: [
      "Loose or damaged belt",
      "Worn bearings",
      "Loose mounting bolts",
      "Internal component wear"
    ],
    solutions: [
      "Check and adjust belt tension",
      "Inspect and replace bearings if necessary",
      "Tighten all mounting hardware",
      "Schedule professional inspection"
    ],
    severity: "medium"
  },
  {
    symptom: "Low Pressure Output",
    possibleCauses: [
      "Air leaks in system",
      "Clogged air filters",
      "Worn valves",
      "Belt slippage"
    ],
    solutions: [
      "Perform leak detection test",
      "Clean or replace air filters",
      "Inspect and repair valves",
      "Check belt tension and condition"
    ],
    severity: "high"
  },
  {
    symptom: "Oil in Air Output",
    possibleCauses: [
      "Failed piston rings",
      "Clogged oil separator",
      "Overfilled oil",
      "Wrong oil type"
    ],
    solutions: [
      "Replace piston rings",
      "Clean or replace oil separator",
      "Adjust oil level",
      "Use recommended oil type"
    ],
    severity: "high"
  },
  {
    symptom: "Overheating",
    possibleCauses: [
      "Insufficient ventilation",
      "Dirty cooling fins",
      "Low oil level",
      "Excessive duty cycle"
    ],
    solutions: [
      "Improve airflow around unit",
      "Clean cooling system",
      "Check and add oil if needed",
      "Reduce operating time"
    ],
    severity: "high"
  }
];

const CompressorMaintenance = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("all");
  
  const filteredTasks = selectedFrequency === "all" 
    ? maintenanceTasks 
    : maintenanceTasks.filter(task => task.frequency.toLowerCase() === selectedFrequency.toLowerCase());

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'medium':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <ToolNavigation title="Compressor Maintenance Guide" />
      
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Comprehensive maintenance and troubleshooting resource for industrial compressors. 
          Follow the scheduled maintenance tasks and use the troubleshooting guide to diagnose issues.
        </p>

        <Tabs defaultValue="maintenance" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-11 mb-6">
            <TabsTrigger value="maintenance" className="flex items-center gap-2 text-sm font-medium">
              <Wrench className="h-4 w-4" />
              Maintenance Schedule
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="flex items-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              Troubleshooting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="maintenance" className="space-y-6">
            <Card className="shadow-sm border-neutral-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Maintenance Tasks</CardTitle>
                  <Select value={selectedFrequency} onValueChange={setSelectedFrequency}>
                    <SelectTrigger className="w-[180px] h-9 text-sm">
                      <SelectValue placeholder="Filter by frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tasks</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTasks.map((task) => (
                    <Card key={task.id} className="shadow-sm border-neutral-100">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base font-semibold">{task.title}</CardTitle>
                            <CardDescription className="flex items-center gap-1 mt-1 text-sm">
                              <Calendar className="h-3.5 w-3.5" />
                              {task.frequency}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm leading-relaxed">{task.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Required Tools:</h4>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                              {task.tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-2">Safety Considerations:</h4>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                              {task.safety.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="troubleshooting" className="space-y-6">
            <Card className="shadow-sm border-neutral-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Common Issues & Solutions</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Select a symptom to view possible causes and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {troubleshootingGuide.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-neutral-200 rounded-md px-4">
                      <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                        <div className="flex items-center gap-2">
                          <span>{item.symptom}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${getSeverityColor(item.severity)}`}>
                            {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)} Priority
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium flex items-center gap-2 mb-2 text-sm">
                              <HelpCircle className="h-4 w-4 text-primary" />
                              Possible Causes
                            </h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {item.possibleCauses.map((cause, idx) => (
                                <li key={idx}>{cause}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium flex items-center gap-2 mb-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              Recommended Solutions
                            </h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {item.solutions.map((solution, idx) => (
                                <li key={idx}>{solution}</li>
                              ))}
                            </ul>
                          </div>

                          {item.severity === 'high' && (
                            <Alert variant="destructive" className="mt-2 text-sm">
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                This is a critical issue that requires immediate attention.
                                Consider shutting down the compressor until resolved.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-neutral-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <FileText className="h-5 w-5 text-primary" />
                  Documentation & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full h-10 font-medium" asChild>
                    <a href="/docs/compressor-manual.pdf" target="_blank" rel="noopener noreferrer">
                      Download Full Manual
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full h-10 font-medium" asChild>
                    <a href="/contact" target="_blank" rel="noopener noreferrer">
                      Contact Technical Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompressorMaintenance; 