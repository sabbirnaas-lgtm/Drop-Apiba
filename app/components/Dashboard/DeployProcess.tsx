import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Database, Cloud, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
    {
        id: 'clusters',
        label: {
            en: 'Initializing Optimization Clusters...',
            ar: 'بدء تشغيل مجموعات التحسين...',
            he: 'אתחול אשכולות אופטימיזציה...'
        },
        icon: Terminal,
        delay: 1500
    },
    {
        id: 'reindex',
        label: {
            en: 'Re-indexing Smart Assets...',
            ar: 'إعادة فهرسة الأصول الذكية...',
            he: 'אינדוקס מחדש של נכסים חכמים...'
        },
        icon: Database,
        delay: 2000
    },
    {
        id: 'logic',
        label: {
            en: 'Propagating RTL Logic Nodes...',
            ar: 'نشر عقد منطق RTL...',
            he: 'הפצת צמתי לוגיקה של RTL...'
        },
        icon: Cpu,
        delay: 1800
    },
    {
        id: 'edge',
        label: {
            en: 'Enterprise Edge Deployment...',
            ar: 'نشر حافة المؤسسة...',
            he: 'פריסת קצה ארגונית...'
        },
        icon: Cloud,
        delay: 2500
    },
    {
        id: 'security',
        label: {
            en: 'Validating Security Protocols...',
            ar: 'التحقق من بروتوكولات الأمان...',
            he: 'אימות פרוטוקולי אבטחה...'
        },
        icon: ShieldCheck,
        delay: 1500
    }
];

interface DeployProcessProps {
    onComplete: () => void;
}

export default function DeployProcess({ onComplete }: DeployProcessProps) {
    const { language } = useLanguage();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    useEffect(() => {
        if (currentStepIndex < steps.length) {
            const step = steps[currentStepIndex];
            const timer = setTimeout(() => {
                setCompletedSteps((prev) => [...prev, step.id]);
                if (currentStepIndex === steps.length - 1) {
                    setTimeout(onComplete, 1000);
                } else {
                    setCurrentStepIndex(currentStepIndex + 1);
                }
            }, step.delay);
            return () => clearTimeout(timer);
        }
    }, [currentStepIndex, onComplete]);

    return (
        <div className="flex flex-col h-[400px] bg-accent/5 rounded-2xl overflow-hidden border border-gray-100 relative">
            <div className="p-4 bg-accent/10 border-b border-gray-200/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={14} />
                        {language === 'en' ? 'Deployment Engine — v4.2.0' : (language === 'ar' ? 'محرك النشر — الاصدار 4.2.0' : 'מנוע פריסה — גרסה 4.2.0')}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <RefreshCw size={14} className="text-primary animate-spin" />
                    <span className="text-[10px] font-bold text-primary uppercase">Live</span>
                </div>
            </div>

            <div className="flex-1 p-8 space-y-4 overflow-y-auto font-mono custom-scrollbar">
                <AnimatePresence mode="popLayout">
                    {steps.map((step, index) => {
                        const isCompleted = completedSteps.includes(step.id);
                        const isCurrent = index === currentStepIndex;

                        if (index > currentStepIndex) return null;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`flex items-start gap-4 ${isCompleted ? 'text-gray-400' : 'text-accent'}`}
                            >
                                <div className="mt-1">
                                    {isCompleted ? (
                                        <CheckCircle2 size={16} className="text-green-500" />
                                    ) : (
                                        <step.icon size={16} className={isCurrent ? 'text-primary animate-pulse' : ''} />
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[13px] font-bold tracking-tight">
                                        {step.label[language as keyof typeof step.label]}
                                    </p>
                                    {isCurrent && (
                                        <motion.div
                                            className="h-1 bg-gray-100 rounded-full w-48 overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ x: '-100%' }}
                                                animate={{ x: '100%' }}
                                                transition={{ duration: step.delay / 1000, ease: 'linear', repeat: Infinity }}
                                                className="h-full bg-primary w-1/2"
                                            />
                                        </motion.div>
                                    )}
                                    {isCompleted && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-[10px] font-bold text-green-600 uppercase tracking-widest"
                                        >
                                            OK — 200 SUCCESS
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="p-4 bg-accent/5 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="text-[11px] font-bold text-gray-400">
                        {language === 'en' ? 'Tasks:' : (language === 'ar' ? 'المهام:' : 'משימות:')} {completedSteps.length}/{steps.length}
                    </div>
                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
                            className="h-full bg-primary"
                        />
                    </div>
                </div>
                <div className="text-[11px] font-bold text-gray-300 italic">
                    Node_id: ds-cluster-alpha-09
                </div>
            </div>
        </div>
    );
}
