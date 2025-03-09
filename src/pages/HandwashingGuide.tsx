import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Droplets, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import ToolNavigation from '@/components/ToolNavigation';

const HandwashingGuide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({});
  const [quizResults, setQuizResults] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [timerActive, timeLeft]);

  const steps = [
    {
      title: "Wet Hands",
      description: "Use clean running water to wet your hands before applying soap.",
      image: "/images/handwashing/wet-hands.svg"
    },
    {
      title: "Apply Soap",
      description: "Apply enough soap to cover all hand surfaces.",
      image: "/images/handwashing/apply-soap.svg"
    },
    {
      title: "Rub Palms",
      description: "Rub hands palm to palm in circular motions.",
      image: "/images/handwashing/rub-palms.svg"
    },
    {
      title: "Between Fingers",
      description: "Clean between fingers by interlacing them.",
      image: "/images/handwashing/between-fingers.svg"
    },
    {
      title: "Back of Hands",
      description: "Rub the back of each hand with the palm of the other.",
      image: "/images/handwashing/back-of-hands.svg"
    },
    {
      title: "Thumbs",
      description: "Clean thumbs by rotating them in the closed palm of the opposite hand.",
      image: "/images/handwashing/thumbs.svg"
    },
    {
      title: "Fingertips",
      description: "Clean fingertips by rubbing them in the palm of the opposite hand.",
      image: "/images/handwashing/fingertips.svg"
    },
    {
      title: "Rinse Hands",
      description: "Rinse hands thoroughly under clean running water.",
      image: "/images/handwashing/rinse-hands.svg"
    },
    {
      title: "Dry Hands",
      description: "Dry hands completely using a clean towel or air dryer.",
      image: "/images/handwashing/dry-hands.svg"
    }
  ];

  const quizQuestions = [
    {
      id: "q1",
      question: "How long should you wash your hands?",
      options: [
        { value: "a", label: "5 seconds" },
        { value: "b", label: "10 seconds" },
        { value: "c", label: "20 seconds" },
        { value: "d", label: "1 minute" }
      ],
      correctAnswer: "c"
    },
    {
      id: "q2",
      question: "When should you wash your hands in the field?",
      options: [
        { value: "a", label: "Only before eating" },
        { value: "b", label: "Only after using the restroom" },
        { value: "c", label: "Only when visibly dirty" },
        { value: "d", label: "All of the above, plus after handling equipment" }
      ],
      correctAnswer: "d"
    },
    {
      id: "q3",
      question: "What is the proper way to dry your hands?",
      options: [
        { value: "a", label: "Shake them in the air" },
        { value: "b", label: "Wipe them on your clothes" },
        { value: "c", label: "Use a clean towel or air dryer" },
        { value: "d", label: "It doesn't matter" }
      ],
      correctAnswer: "c"
    }
  ];

  const handleTimerToggle = () => {
    if (!timerActive && timeLeft === 0) {
      setTimeLeft(20);
    }
    setTimerActive(!timerActive);
  };

  const handleQuizSubmit = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    setQuizResults({ correct, total: quizQuestions.length });
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <ToolNavigation title="Field Service Hand Washing Guide" />
      
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Proper hand washing is essential for field service engineers to prevent contamination and maintain health and safety standards.
          Follow this step-by-step guide, use the timer, and test your knowledge with the quiz.
        </p>

        {/* Steps Section */}
        <Card className="shadow-sm border-neutral-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Droplets className="h-5 w-5 text-primary" />
              Step-by-Step Hand Washing Technique
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Click on each step to view details. Follow all steps for proper hand hygiene.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`
                    flex flex-col items-center p-2 rounded-md cursor-pointer transition-colors
                    ${activeStep === index ? 'bg-primary/10 border border-primary/30' : 'hover:bg-neutral-100'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <span className="text-xs text-center font-medium line-clamp-2">{step.title}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-neutral-100 rounded-md flex items-center justify-center">
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title} 
                    className="max-w-full max-h-full p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/200x200?text=Step+' + (activeStep + 1);
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-semibold mb-2">{steps[activeStep].title}</h3>
                <p className="text-muted-foreground">{steps[activeStep].description}</p>
                <div className="flex justify-between mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timer Section */}
        <Card className="shadow-sm border-neutral-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Clock className="h-5 w-5 text-primary" />
              20-Second Timer
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Use this timer to ensure you wash your hands for the recommended 20 seconds.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full mb-4">
                <Progress value={(timeLeft / 20) * 100} className="h-3" />
              </div>
              <div className="text-4xl font-bold mb-4">{timeLeft}</div>
              <Button 
                onClick={handleTimerToggle} 
                className={timerActive ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"}
              >
                {timerActive ? "Stop" : timeLeft === 0 ? "Reset" : "Start"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Section */}
        <Card className="shadow-sm border-neutral-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <CheckCircle className="h-5 w-5 text-primary" />
              Hand Hygiene Knowledge Quiz
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Test your knowledge about proper hand washing techniques.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {quizResults ? (
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-neutral-100 text-center">
                  <h3 className="text-lg font-semibold mb-2">Quiz Results</h3>
                  <p className="text-2xl font-bold mb-2">
                    {quizResults.correct} / {quizResults.total}
                  </p>
                  <p className="text-muted-foreground">
                    {quizResults.correct === quizResults.total 
                      ? "Excellent! You know proper hand hygiene." 
                      : quizResults.correct >= quizResults.total / 2 
                        ? "Good job! Review the steps to improve further." 
                        : "Please review the hand washing steps and try again."}
                  </p>
                </div>
                <Button onClick={resetQuiz} className="w-full">Try Again</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {quizQuestions.map((q) => (
                  <div key={q.id} className="space-y-3">
                    <h3 className="font-medium">{q.question}</h3>
                    <RadioGroup 
                      value={quizAnswers[q.id] || ""} 
                      onValueChange={(value) => setQuizAnswers({...quizAnswers, [q.id]: value})}
                    >
                      {q.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                          <Label htmlFor={`${q.id}-${option.value}`} className="text-sm">{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                <Button 
                  onClick={handleQuizSubmit} 
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="w-full"
                >
                  Submit Answers
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Important Note */}
        <Card className="shadow-sm border-neutral-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Important Note</h3>
                <p className="text-sm text-muted-foreground">
                  In field service environments where soap and water are not available, use an alcohol-based hand sanitizer 
                  containing at least 60% alcohol. However, if hands are visibly dirty, always wash with soap and water when possible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HandwashingGuide; 