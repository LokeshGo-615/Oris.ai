import { PageHeader } from "@/components/page-header";

export function TextToSpeechLayout({
    children,
}:{
    children : React.ReactNode;
}){
    return(
        <div className="flex h-full min-h-h0 flex-col overflow-hidden">
            <PageHeader title = "Text to speech" />
            {children}
        </div>
    )
}