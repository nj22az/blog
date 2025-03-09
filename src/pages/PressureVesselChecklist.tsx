import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Printer, Save, ClipboardCheck, AlertTriangle, Info } from 'lucide-react';
import ToolNavigation from '@/components/ToolNavigation';

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  critical: boolean;
}

const checklistItems: ChecklistItem[] = [
  // Documentation
  { id: "doc1", category: "Documentation", item: "Vessel certification current and available", critical: true },
  { id: "doc2", category: "Documentation", item: "Operation manual present", critical: true },
  { id: "doc3", category: "Documentation", item: "Previous inspection reports available", critical: false },
  { id: "doc4", category: "Documentation", item: "Maintenance records up to date", critical: true },
  
  // External Inspection
  { id: "ext1", category: "External Inspection", item: "No visible damage or dents", critical: true },
  { id: "ext2", category: "External Inspection", item: "No excessive corrosion", critical: true },
  { id: "ext3", category: "External Inspection", item: "Insulation intact and dry", critical: false },
  { id: "ext4", category: "External Inspection", item: "Support structure in good condition", critical: true },
  { id: "ext5", category: "External Inspection", item: "No leaks at connections", critical: true },
  
  // Safety Devices
  { id: "saf1", category: "Safety Devices", item: "Pressure relief valve operational", critical: true },
  { id: "saf2", category: "Safety Devices", item: "Pressure gauge functional and calibrated", critical: true },
  { id: "saf3", category: "Safety Devices", item: "Emergency shutdown system tested", critical: true },
  { id: "saf4", category: "Safety Devices", item: "Safety valve seals intact", critical: true },
  
  // Operational Check
  { id: "op1", category: "Operational Check", item: "Operating pressure within limits", critical: true },
  { id: "op2", category: "Operational Check", item: "Temperature indicators functional", critical: true },
  { id: "op3", category: "Operational Check", item: "No unusual noises or vibrations", critical: true },
  { id: "op4", category: "Operational Check", item: "Vents and drains clear", critical: false }
];

const PressureVesselChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [notes, setNotes] = useState<string>("");
  const [vesselInfo, setVesselInfo] = useState({
    id: "",
    location: "",
    inspector: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleCheck = (id: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [id]: checked }));
  };

  const getCompletionStatus = () => {
    const totalItems = checklistItems.length;
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    return (completedItems / totalItems) * 100;
  };

  const getCriticalItemsStatus = () => {
    const criticalItems = checklistItems.filter(item => item.critical);
    const completedCriticalItems = criticalItems.filter(item => checkedItems[item.id]);
    return completedCriticalItems.length === criticalItems.length;
  };

  const handleSave = () => {
    const report = {
      vesselInfo,
      checkedItems,
      notes,
      timestamp: new Date().toISOString(),
    };
    
    // Convert to JSON string
    const reportStr = JSON.stringify(report, null, 2);
    
    // Create blob and download
    const blob = new Blob([reportStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pressure-vessel-inspection-${vesselInfo.id}-${vesselInfo.date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <ToolNavigation title="Pressure Vessel Inspection Checklist" />
      
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ensure safe operation through thorough inspection of pressure vessels. Complete all critical items before operation.
        </p>

        {/* Vessel Information */}
        <Card className="shadow-sm border-neutral-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Info className="h-5 w-5 text-primary" />
              Vessel Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vesselId" className="text-sm font-medium">Vessel ID</Label>
                <Input
                  id="vesselId"
                  value={vesselInfo.id}
                  onChange={(e) => setVesselInfo(prev => ({ ...prev, id: e.target.value }))}
                  placeholder="Enter vessel ID"
                  className="font-sans"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                <Input
                  id="location"
                  value={vesselInfo.location}
                  onChange={(e) => setVesselInfo(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Enter vessel location"
                  className="font-sans"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inspector" className="text-sm font-medium">Inspector Name</Label>
                <Input
                  id="inspector"
                  value={vesselInfo.inspector}
                  onChange={(e) => setVesselInfo(prev => ({ ...prev, inspector: e.target.value }))}
                  placeholder="Enter inspector name"
                  className="font-sans"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">Inspection Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={vesselInfo.date}
                  onChange={(e) => setVesselInfo(prev => ({ ...prev, date: e.target.value }))}
                  className="font-sans"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        {["Documentation", "External Inspection", "Safety Devices", "Operational Check"].map((category) => (
          <Card key={category} className="shadow-sm border-neutral-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-semibold">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {checklistItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 py-2 border-b border-neutral-100 last:border-0">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems[item.id] || false}
                        onCheckedChange={(checked) => handleCheck(item.id, checked as boolean)}
                        className="mt-0.5"
                      />
                      <div className="space-y-1">
                        <Label
                          htmlFor={item.id}
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.item}
                        </Label>
                        {item.critical && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            Critical item
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Notes */}
        <Card className="shadow-sm border-neutral-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold">Additional Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any additional observations, concerns, or notes..."
              className="min-h-[100px] font-sans"
            />
          </CardContent>
        </Card>

        {/* Status and Actions */}
        <Card className="shadow-sm border-neutral-200">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  Completion Status: {getCompletionStatus().toFixed(0)}%
                </p>
                {!getCriticalItemsStatus() && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Not all critical items have been checked
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                  <Save className="h-4 w-4" />
                  Save Report
                </Button>
                <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reference Materials */}
        <Card className="shadow-sm border-neutral-200 print:hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold">Reference Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2 h-10" asChild>
                <a href="/docs/pressure-vessel-standards.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Standards Guide
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 h-10" asChild>
                <a href="/docs/inspection-templates.pdf" download>
                  <ClipboardCheck className="h-4 w-4" />
                  Download Blank Templates
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PressureVesselChecklist; 